import { compare } from "bcryptjs";
import { inject, injectable } from "tsyringe";
import { User } from "../../../../entities/User";
import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../contracts/IUsersRepository";
import { authUserDTO } from "../../DTO/CreateUserDTO";
import { sign } from "jsonwebtoken"
import { configEnv } from "../../../../configs/dotenv";

export interface IResponse {
    user: {
        name: string;
        username: string;
    },
    token: string
}

@injectable()
export class AuthUserUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository
    ){}
    
    async execute(data: authUserDTO): Promise<IResponse> {
        const { password, confirmPassword, username } = data;
        if (password !== confirmPassword) throw new AppError("Password don't match.")

        const user = await this.usersRepository.findByEmail(username) as User
        if (!user) throw new AppError("Email or password incorrect.");
        
        const passwordIsCorrect = await compare(password, user.password)
        if (!passwordIsCorrect) throw new AppError('Email or passsword incorrect, please try again.')
        
        const token = sign({}, configEnv?.jwt.secret as string, {
            subject: JSON.stringify(user?.id)
        })

        const tokenReturn: IResponse = {
            user: {
                name: user.first_name,
                username: user.username
            },
            token
        }

        return tokenReturn
    }
}