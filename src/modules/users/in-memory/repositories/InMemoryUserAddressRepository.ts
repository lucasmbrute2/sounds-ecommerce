import { AppError } from "../../../../shared/errors/AppError";
import { IUserAddressRespository } from "../../contracts/IUserAddressRespository";
import { CreateUserAddressDTO } from "../../DTO/CreateUserDTO";
import { User } from "../../entities/User";
import { UserAddress } from "../../entities/UserAddress";

export class InMemoryUserAddressRepository implements IUserAddressRespository {
    private repository: UserAddress[] = [];
    
    async findByID(id: string): Promise<Falsy | UserAddress> {
        return this.repository.find(userAddress => userAddress.id === id)
    }
    
    async createAddress(data: CreateUserAddressDTO, user:User): Promise<UserAddress> {
        const userAddress = new UserAddress()
        
        Object.assign(userAddress, {
            ...data,
            user
        })

        this.repository.push(userAddress)
        return this.repository.find(address => address.user === user) as UserAddress
    }

    async findByZIP(postalCode: string): Promise<UserAddress | Falsy> {
        return this.repository.find(userAddress => userAddress.postal_code === postalCode)
    }

}