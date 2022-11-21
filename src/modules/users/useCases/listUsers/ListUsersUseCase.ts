import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../contracts/IUsersRepository";

@injectable()
export class ListUsersUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository 
        ){}
    
    async execute () {
        return await this.usersRepository.findAll();
    } 
}