import { CreateUserAddressDTO } from "../DTO/CreateUserDTO";
import { User } from "../../../entities/User";
import { UserAddress } from "../../../entities/UserAddress";

export interface IUserAddressRespository {
    createAddress(data: CreateUserAddressDTO, user:User): Promise<UserAddress>
    findByID(id: string): Promise<UserAddress | Falsy>
    findByZIP(postalCode: string): Promise<UserAddress | Falsy>
}