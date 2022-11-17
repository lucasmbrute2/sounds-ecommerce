import { IUsersRepository } from "../../contracts/IUsersRepository";
import { CreateUserDTO } from "../../DTO/CreateUserDTO";
import { User } from "../../../../entities/User";
import { v4 as uuid } from "uuid"

export class InMemoryUsersRepository implements IUsersRepository {

  private usersRepo: User[] = [];

  async create(data: CreateUserDTO): Promise<void> {
    const user = new User()
    user.id = uuid();

    Object.assign(user, {
      ...data,
      adresses: []
    })
      
    this.usersRepo.push(user)
  }

  async findByEmail(username: string): Promise<User | Falsy> {
    return this.usersRepo.find(user => user.username === username);
  }

  async findByID(id: string): Promise<User | Falsy> {
    return this.usersRepo.find(user => user.id === id)
  }
}