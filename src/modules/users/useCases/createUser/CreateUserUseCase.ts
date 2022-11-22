import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../contracts/IUsersRepository";
import { CreateUserDTO } from "../../DTO/CreateUserDTO";
import { UserValidation } from "../../../../shared/DTOValidation/UserValidation";
import { injectable, inject } from "tsyringe"
import { hash } from "bcryptjs"

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository") private usersRepository: IUsersRepository
  ) { }

  async execute(data: CreateUserDTO) {
    await new UserValidation(data).validate();    
    const user = await this.usersRepository.findByEmail(data.username)

    if (user) throw new AppError("User Already exists");

    const hashPassword = await hash(data.password, 8);
    data.password = hashPassword;

    return await this.usersRepository.create(data);
  }
}