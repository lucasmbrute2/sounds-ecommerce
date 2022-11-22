import { beforeEach, describe, expect, test } from "vitest";
import { InMemoryProfileRepository } from "../../in-memory/repositories/InMemoryProfileRepository";
import { InMemoryUsersRepository } from "../../in-memory/repositories/InMemoryUserRepository";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { CreateProfileUseCase } from "./CreateProfileUseCase";

let createProfileUseCase: CreateProfileUseCase
let profileRepository: InMemoryProfileRepository
let createUserUseCase: CreateUserUseCase
let usersRepository: InMemoryUsersRepository

describe("Profile entity", ()=> {
    beforeEach(()=> {
        profileRepository = new InMemoryProfileRepository()
        usersRepository = new InMemoryUsersRepository()
        createUserUseCase = new CreateUserUseCase(usersRepository)
        createProfileUseCase = new CreateProfileUseCase(profileRepository, usersRepository)
    })
    
    test("should be able to create a profile", async ()=> {
        const user = await createUserUseCase.execute({
            first_name: 'Lucas',
            last_name: 'Dantas',
            password: 'Adkad!34231',
            phone: '3131313131',
            username: 'lucasj@gmail.com'
        })

        const profile = await createProfileUseCase.execute({
            photo: "users/photo/belafoto.png",
            user_id: user?.id as string
        })
        console.log(profile);
    
        expect(profile).toHaveProperty('id')
    })
})