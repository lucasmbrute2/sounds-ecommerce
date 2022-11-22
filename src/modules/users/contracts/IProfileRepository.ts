import { Profile } from "../../../entities/Profile"
import { User } from "../../../entities/User"

export interface createProfileDTO {
    photo: string
    user_id: string
}

export interface IProfileRepository {
    create(photo: string, user: User): Promise<Profile> 
}