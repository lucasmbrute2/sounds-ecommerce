import { Repository } from "typeorm";
import { AppDataSource } from "../../../shared/infra/data-source";
import { IUserAddressRespository } from "../contracts/IUserAddressRespository";
import { CreateUserAddressDTO } from "../DTO/CreateUserDTO";
import { User } from "../../../entities/User";
import { UserAddress } from "../../../entities/UserAddress";

export class UserAddressRepository implements IUserAddressRespository {
    private repository: Repository<UserAddress>
    
    constructor(){
        this.repository = AppDataSource.getRepository(UserAddress)
    }
    
    async findByZIP(postalCode: string): Promise<Falsy | UserAddress> {
        return this.repository.findOneBy({ 
            postal_code: postalCode
        })
    }
    
    async findByID(id: string): Promise<UserAddress | Falsy> {
        return this.repository.findOneBy({ id })
    }

    async createAddress(data: CreateUserAddressDTO, user:User): Promise<UserAddress> {
        const userAddress = this.repository.create({
            ...data,
            user
        })

        return await this.repository.save(userAddress);
    }
}