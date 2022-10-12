import { CreateUserDTO } from "../DTO/CreateUserDTO";

export interface IUsersRepository {
  create(data: CreateUserDTO): Promise<void>
}