import { beforeEach, describe, expect, test } from "vitest";
import { AppError } from "../../../../shared/errors/AppError";
import { CreateUserAddressDTO, CreateUserDTO } from "../../DTO/CreateUserDTO";
import { User } from "../../entities/User";
import { InMemoryUserAddressRepository } from "../../in-memory/repositories/InMemoryUserAddressRepository";
import { InMemoryUsersRepository } from "../../in-memory/repositories/InMemoryUserRepository";
import { CreateUserAddressUseCase } from "./CreateUserAddressUseCase";

let usersRepository: InMemoryUsersRepository
let userAddressRepository: InMemoryUserAddressRepository
let createUserAddressUseCase: CreateUserAddressUseCase

describe("Create an user address", ()=> {
    beforeEach(()=> {
        usersRepository = new InMemoryUsersRepository()
        userAddressRepository = new InMemoryUserAddressRepository()
        createUserAddressUseCase = new CreateUserAddressUseCase(usersRepository, userAddressRepository)
    })

    test('should be able to create an address', async ()=> {
        const username = 'lucasmbru@gmail.com' 
        await usersRepository.create({
            first_name: 'lucas',
            last_name: 'dantas',
            password: '1313131',
            phone: '1331313',
            username
        })

        const user = await usersRepository.findByEmail(username) as User
        
        const userAddress = await createUserAddressUseCase.execute({
            address_line1: 'address 1',
            address_line2: 'address2',
            city: 'city test',
            country: 'country test',
            mobile: '313013010',
            phone: '31313131',
            postal_code: '31314-313',
            user_id: user.id as string
        })
        expect(userAddress).toHaveProperty("id")
    })

    test('should not be able to create an address without a user', ()=>{
        expect(async ()=> {
            await createUserAddressUseCase.execute({
                address_line1: 'address 1',
                address_line2: 'address2',
                city: 'city test',
                country: 'country test',
                mobile: '313013010',
                phone: '31313131',
                postal_code: '3131-313',
                user_id: ''
            })
        }).rejects.toBeInstanceOf(AppError)
    })

    test('should not be able to create an existent address', ()=> {
        expect(async ()=> {
            const userDataAddress: CreateUserAddressDTO = {
                address_line1: 'address 1',
                address_line2: 'address2',
                city: 'city test',
                country: 'country test',
                mobile: '313013010',
                phone: '31313131',
                postal_code: '30590-232',
                user_id: ""
            }

            const userData: CreateUserDTO = {
                first_name: 'lucas',
                last_name: 'dantas',
                password: '1313131',
                phone: '1331313',
                username: 'lucasmbru@gmail.com',
            }
            
            await usersRepository.create(userData);
            
            const { id } = await usersRepository.findByEmail(userData.username) as User
            userDataAddress.user_id = id as string;

            await createUserAddressUseCase.execute(userDataAddress)
            await createUserAddressUseCase.execute(userDataAddress)

        }).rejects.toBeInstanceOf(AppError)
    })
})