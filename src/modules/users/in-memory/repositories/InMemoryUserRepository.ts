import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../contracts/IUsersRepository";
import { CreateUserAddressDTO, CreateUserDTO } from "../../DTO/CreateUserDTO";
import { User } from "../../entities/User";
import { UserAddress } from "../../entities/UserAddress";

export class InMemoryUsersRepository implements IUsersRepository {

  private usersRepo: User[] = [];

  async create(data: CreateUserDTO): Promise<void> {
    const user = new User()

    Object.assign(user, {
      ...data
    })

    this.usersRepo.push(user)
  }

  async findByEmail(username: string): Promise<User | Falsy> {
    return this.usersRepo.find(user => user.username === username);
  }

  async findByID(id: string): Promise<User | Falsy> {
    return this.usersRepo.find(user => user.id === id)
  }

  async createAddress(data: CreateUserAddressDTO): Promise<void> {
    const user = await this.findByID(data.user_id);
    if (!user) throw new AppError("User not found")
    user.adresses.push(data as UserAddress)
  }
}