import { CreateUserAddressDTO, CreateUserDTO } from "../DTO/CreateUserDTO";
import { User } from "../entities/User";

export interface IUsersRepository {
  create(data: CreateUserDTO): Promise<void>
  findByEmail(username: string): Promise<User | Falsy>
  createAddress(data: CreateUserAddressDTO): Promise<void>
  findByID(id: string):  Promise<User | Falsy>
}