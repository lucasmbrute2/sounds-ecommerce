import { inject, injectable } from "tsyringe";
import { Profile } from "../../../../entities/Profile";
import { User } from "../../../../entities/User";
import { AppError } from "../../../../shared/errors/AppError";
import { createProfileDTO, IProfileRepository } from "../../contracts/IProfileRepository";
import { IUsersRepository } from "../../contracts/IUsersRepository";

@injectable()
export class CreateProfileUseCase {
    constructor(
        @inject("ProfileRepository")
        private profileRepository: IProfileRepository,
        @inject('UsersRepository')
        private usersRepository: IUsersRepository
    ){}

    async execute({ photo, user_id }: createProfileDTO): Promise<Profile>{
        const user = await this.usersRepository.findByID(user_id)
        if (!user) throw new AppError("User not found!")
        return await this.profileRepository.create(photo, user as User)
    }
}