import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../contracts/IUsersRepository";
import { CreateUserDTO } from "../../DTO/CreateUserDTO";
import { UserValidation } from "../../DTO/UserValidation";
import { injectable, inject } from "tsyringe"
import { hash } from "bcrypt"

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository") private usersRepository: IUsersRepository
  ) { }

  async execute(data: CreateUserDTO) {
    const userIsValid = await new UserValidation(data).validate();

    if (!userIsValid) throw new AppError("Invalid fields");

    const user = await this.usersRepository.findByEmail(data.username)

    if (user) throw new AppError("User Already exists");

    const hashPassword = await hash(data.password, 8);
    data.password = hashPassword;

    await this.usersRepository.create(data);

    return data;
  }
}