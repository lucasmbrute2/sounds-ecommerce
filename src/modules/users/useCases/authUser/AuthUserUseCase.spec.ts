import { expect, test, describe, beforeEach } from "vitest"
import { AppError } from "../../../../shared/errors/AppError";
import { InMemoryUsersRepository } from "../../in-memory/repositories/InMemoryUserRepository";
import { AuthUserUseCase } from "./AuthUserUseCase";

let userRepository: InMemoryUsersRepository
let authUserUseCase: AuthUserUseCase

describe("Auth a user", ()=> {   
    beforeEach(()=> {
        userRepository = new InMemoryUsersRepository()
        authUserUseCase= new AuthUserUseCase(userRepository)
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
})