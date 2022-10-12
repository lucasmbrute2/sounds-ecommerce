import { CreateUserDTO } from "../DTO/CreateUserDTO";
import { User } from "../entities/User";

export interface IUsersRepository {
  create(data: CreateUserDTO): Promise<void>
  findByEmail(username: string): Promise<User | undefined>
}