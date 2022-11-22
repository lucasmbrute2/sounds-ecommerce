import { Repository } from "typeorm";
import { AppDataSource } from "../../../shared/infra/data-source";
import { IUsersRepository } from "../contracts/IUsersRepository";
import { CreateUserDTO } from "../DTO/CreateUserDTO";
import { User } from "../../../entities/User";

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async findAll(): Promise<User[]> {
    return this.repository.find({
      relations: {
        adresses: true,
        payments: true
      }
    })
  }
  
  async create(data: CreateUserDTO): Promise<User> {
    const user = this.repository.create(data)
    return await this.repository.save(user)
  }
  
  async findByID(id: string): Promise<User | Falsy> {
    const [user] =  await this.repository.find({
      where: {
        id
      },
      relations: {
        adresses: true
      }
    })
    return user;
  }

  async findByEmail(username: string): Promise<User | Falsy> {
    return await this.repository.findOneBy({
      username
    })
  }

  async delete(id: string): Promise<void> {
    await this.repository.softDelete({ id })
  }
}
