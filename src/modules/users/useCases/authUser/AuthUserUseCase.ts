import { compare } from "bcryptjs";
import { inject, injectable } from "tsyringe";
import { User } from "../../../../entities/User";
import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../contracts/IUsersRepository";
import { authUserDTO } from "../../DTO/CreateUserDTO";

@injectable()
export class AuthUserUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository
    ){}
    
    async execute(data: authUserDTO){
        const { password, confirmPassword, username } = data;
        if (password !== confirmPassword) throw new AppError("Password don't match.")

        const user = await this.usersRepository.findByEmail(username) as User
        if (!user) throw new Error("User or password incorrect.");
        
        const passwordIsCorrect = await compare(password, user.password)
        
        if (!passwordIsCorrect) throw new AppError('Email or passsword incorrect, please try again.')
        
        //TODO return a JWT TOKEN
        return 'jwt'
    }
}