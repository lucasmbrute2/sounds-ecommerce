import { injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../contracts/IUsersRepository";
import { authUserDTO } from "../../DTO/CreateUserDTO";

@injectable()
export class AuthUserUseCase {
    constructor(
        private usersRepoisitory: IUsersRepository
    ){}
    
    async execute(data: authUserDTO){
        const { password, confirmPassword } = data;
        if (password !== confirmPassword) throw new AppError("Password don't match.")
    }
}