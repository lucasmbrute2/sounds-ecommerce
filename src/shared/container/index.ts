import { container } from "tsyringe"
import { IUserAddressRespository } from "../../modules/users/contracts/IUserAddressRespository";
import { IUsersRepository } from "../../modules/users/contracts/IUsersRepository"
import { UserAddressRepository } from "../../modules/users/repositories/UserAddressRepository";
import { UsersRepository } from "../../modules/users/repositories/UsersRepository"


container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IUserAddressRespository>(
  'UsersAddressRepository',
  UserAddressRepository
)