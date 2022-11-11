import { inject, injectable } from "tsyringe";
import { UserAddressValidation } from "../../../../shared/DTOValidation/UserAddressValidation";
import { AppError } from "../../../../shared/errors/AppError";
import { IUserAddressRespository } from "../../contracts/IUserAddressRespository";
import { IUsersRepository } from "../../contracts/IUsersRepository";
import { CreateUserAddressDTO } from "../../DTO/CreateUserDTO";

@injectable()
export class CreateUserAddressUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
        @inject("UsersAddressRepository")
        private userAddressRepository: IUserAddressRespository
    ){}

    async execute(data: CreateUserAddressDTO) {
        await new UserAddressValidation(data).validate()            

        const user = await this.usersRepository.findByID(data.user_id)
        if (!user) throw new AppError("User not found, please try again!")

        //TO VALIDATE IF ADDRESS ALREADY EXISTS
        return await this.userAddressRepository.createAddress(data, user)
    }
}