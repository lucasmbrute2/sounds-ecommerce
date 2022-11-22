import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../contracts/IUsersRepository";

@injectable()
export class DeleteUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute (id: string){
        try {
            await this.usersRepository.delete(id);
        } catch (error) {
            throw new AppError('User could not be deleted.')
        }
    }
}