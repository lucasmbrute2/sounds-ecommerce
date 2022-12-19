import { Profile } from "../../../entities/Profile";
import { User } from "../../../entities/User";
import { IProfileRepository } from "../../../modules/users/contracts/IProfileRepository";

export class InMemoryProfileRepository implements IProfileRepository {
    private repository: Profile[] = [];
    
    async create(photo: string, user: User): Promise<Profile> {
        const profile = new Profile()
        profile.user = user;

        Object.assign(profile, {
            photo
        })

        this.repository.push(profile)
        return profile;
    }

}