import { beforeEach, describe, expect, test } from "vitest";
import { LocalStorageProvider } from "../../../../shared/container/providers/StorageProvider/implementations/LocalStorageProvider";
import { AppError } from "../../../../shared/errors/AppError";
import { makeUser } from "../../../../shared/test/factories/user-factory";
import { InMemoryProfileRepository } from "../../../../shared/test/repositories/InMemoryProfileRepository";
import { InMemoryUsersRepository } from "../../../../shared/test/repositories/InMemoryUserRepository";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { CreateProfileUseCase } from "./CreateProfileUseCase";

let createProfileUseCase: CreateProfileUseCase
let profileRepository: InMemoryProfileRepository
let createUserUseCase: CreateUserUseCase
let usersRepository: InMemoryUsersRepository
let storageProvider: LocalStorageProvider

describe("Profile entity", ()=> {
    beforeEach(()=> {
        profileRepository = new InMemoryProfileRepository()
        usersRepository = new InMemoryUsersRepository()
        createUserUseCase = new CreateUserUseCase(usersRepository)
        storageProvider = new LocalStorageProvider();
        createProfileUseCase = new CreateProfileUseCase(profileRepository, usersRepository, storageProvider)
    })
    
    test("should be able to create a profile", async ()=> {
        const factoryUser = makeUser();
        const user = await createUserUseCase.execute(factoryUser)

        const profile = await createProfileUseCase.execute({
            photo: "mustang.jpg",
            user_id: user?.id as string
        })    
        expect(profile).toHaveProperty('id')
    })

    test("should not be able to create a profile for a not valid user", ()=> {
        expect(async ()=> {
            await createProfileUseCase.execute({
                photo: "mustang.jpg",
                user_id: 'test'
            })    
        }).rejects.toBeInstanceOf(AppError)
    })
})