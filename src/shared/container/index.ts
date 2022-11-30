import { container } from "tsyringe"
import { IProfileRepository } from "../../modules/users/contracts/IProfileRepository";
import { IUserAddressRespository } from "../../modules/users/contracts/IUserAddressRespository";
import { IUsersRepository } from "../../modules/users/contracts/IUsersRepository"
import { ProfileRepository } from "../../modules/users/repositories/ProfileRepository";
import { UserAddressRepository } from "../../modules/users/repositories/UserAddressRepository";
import { UsersRepository } from "../../modules/users/repositories/UsersRepository"
import { LocalStorageProvider } from "./providers/StorageProvider/implementations/LocalStorageProvider";
import { IStorageProvider } from "./providers/StorageProvider/IStorageProvider";


container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IUserAddressRespository>(
  'UsersAddressRepository',
  UserAddressRepository
)

container.registerSingleton<IProfileRepository>(
  'ProfileRepository',
  ProfileRepository
)

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  LocalStorageProvider
)