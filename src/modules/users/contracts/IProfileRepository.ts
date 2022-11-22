import { Profile } from "../../../entities/Profile"
import { User } from "../../../entities/User"

export interface createProfileDTO {
    photo: string
    user_id: string
}

export interface IProfileRepository {
    create(data: createProfileDTO, user: User): Promise<Profile> 
}