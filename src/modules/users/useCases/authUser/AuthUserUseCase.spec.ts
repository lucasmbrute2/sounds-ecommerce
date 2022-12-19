import { expect, test, describe, beforeEach } from "vitest"
import { AppError } from "../../../../shared/errors/AppError";
import { InMemoryUsersRepository } from "../../../../shared/test/repositories/InMemoryUserRepository";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthUserUseCase } from "./AuthUserUseCase";

let userRepository: InMemoryUsersRepository
let authUserUseCase: AuthUserUseCase
let createUserUseCase: CreateUserUseCase

describe("Auth a user", ()=> {   
    beforeEach(()=> {
        userRepository = new InMemoryUsersRepository()
        authUserUseCase= new AuthUserUseCase(userRepository)
        createUserUseCase = new CreateUserUseCase(userRepository)
    })    

    test("should not be able to auth a user without match password and confirm password", ()=> {
        expect(async ()=> {
            await authUserUseCase.execute({
                username: 'username TEST',
                password: 'password TEST',
                confirmPassword: 'wrong password TEST'
            })
        }).rejects.toBeInstanceOf(AppError)
    })

    test("should not be able to auth a user with wrong password", ()=> {
        expect(async ()=> {
            await createUserUseCase.execute({
                first_name: 'Lucas',
                last_name: 'Dantas',
                password: 'Adkad!321',
                phone: '31313131',
                username: 'emailtest@gmail.com'
            })
    
            await authUserUseCase.execute({
                password: 'Adkad!323',
                confirmPassword: 'Adkad!323',
                username: 'emailtest@gmail.com'
            })
        }).rejects.toBeInstanceOf(AppError)
    })

    test("should be able to auth a user receiving a JWT token", async ()=> {

        await createUserUseCase.execute({
            first_name: 'Lucas',
            last_name: 'Dantas',
            password: 'Adkad!321',
            phone: '31313131',
            username: 'emailtest@gmail.com'
        })

        const userAuthResponse = await authUserUseCase.execute({
            password: 'Adkad!321',
            confirmPassword: 'Adkad!321',
            username: 'emailtest@gmail.com'
        })

        expect(userAuthResponse).toHaveProperty('token')

    })
})