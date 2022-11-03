import { Repository } from "typeorm";
import { AppDataSource } from "../../../shared/infra/data-source";
import { IUsersRepository } from "../contracts/IUsersRepository";
import { CreateUserDTO } from "../DTO/CreateUserDTO";
import { User } from "../entities/User";

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }
  
  async create(data: CreateUserDTO): Promise<void> {
    const user = this.repository.create(data)
    await this.repository.save(user)
  }
  
  async findByID(id: string): Promise<User | Falsy> {
    return await this.repository.findOneBy({ id })
  }

  async findByEmail(username: string): Promise<User | Falsy> {
    return await this.repository.findOneBy({
      username
    })
  }
}
