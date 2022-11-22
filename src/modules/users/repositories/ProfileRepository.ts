import { Repository } from "typeorm";
import { Profile } from "../../../entities/Profile";
import { User } from "../../../entities/User";
import { AppDataSource } from "../../../shared/infra/data-source";
import { IProfileRepository } from "../contracts/IProfileRepository";

export class ProfileRepository implements IProfileRepository {
    private repository: Repository<Profile>

    constructor(){
        this.repository = AppDataSource.getRepository(Profile);
    }
    
    async create(photo: string, user: User): Promise<Profile> {
        const profile = this.repository.create({
            photo,
            user
        })

        return await this.repository.save(profile);
    }

}