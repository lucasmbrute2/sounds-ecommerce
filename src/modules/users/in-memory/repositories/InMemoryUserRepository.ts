import { IUsersRepository } from "../../contracts/IUsersRepository";
import { CreateUserDTO } from "../../DTO/CreateUserDTO";
import { User } from "../../entities/User";

export class InMemoryUsersRepository implements IUsersRepository {
  usersRepo: User[] = [];

  async create(data: CreateUserDTO): Promise<void> {
    const user = new User()

    Object.assign(user, {
      ...data
    })

    this.usersRepo.push(user)
  }

  async findByEmail(username: string): Promise<User | undefined> {
    return this.usersRepo.find(user => user.username === username);
  }
}