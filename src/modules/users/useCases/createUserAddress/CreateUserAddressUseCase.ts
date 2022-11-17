import { inject, injectable } from "tsyringe";
import { User } from "../../../../entities/User";
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

        const user = await this.usersRepository.findByID(data.user_id) as User
        if (!user) throw new AppError("User not found, please try again!")

        user.adresses.forEach(address => {
            if (address.postal_code === data.postal_code) {
                throw new AppError("Address already registered.")
            }
        })

        return await this.userAddressRepository.createAddress(data, user as User)
    }
}