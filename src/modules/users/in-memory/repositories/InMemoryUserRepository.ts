import { IUsersRepository } from "../../contracts/IUsersRepository";
import { CreateUserDTO } from "../../DTO/CreateUserDTO";
import { User } from "../../../../entities/User";
import { v4 as uuid } from "uuid"

export class InMemoryUsersRepository implements IUsersRepository {
  private usersRepo: User[] = [];
  
  async findAll(): Promise<User[]> {
    return this.usersRepo;
  }

  async create(data: CreateUserDTO): Promise<User> {
    const user = new User()
    user.id = uuid();

    Object.assign(user, {
      ...data,
      adresses: []
    })
      
    this.usersRepo.push(user)
    return user;
  }

  async findByEmail(username: string): Promise<User | Falsy> {
    return this.usersRepo.find(user => user.username === username);
  }

  async findByID(id: string): Promise<User | Falsy> {
    return this.usersRepo.find(user => user.id === id)
  }

  async delete(id: string): Promise<void> {
    this.usersRepo.splice(this.usersRepo.findIndex(el => el.id === id))
  }
}