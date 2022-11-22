import { beforeEach, describe, expect, test } from "vitest";
import { User } from "../../../../entities/User";
import { AppError } from "../../../../shared/errors/AppError";
import { InMemoryUsersRepository } from "../../in-memory/repositories/InMemoryUserRepository";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

let usersRepository: InMemoryUsersRepository
let deleteUserUseCase: DeleteUserUseCase
let createUserUseCase: CreateUserUseCase

describe("Delete a user", ()=> {
    beforeEach(()=> {
        usersRepository = new InMemoryUsersRepository()
        deleteUserUseCase = new DeleteUserUseCase(usersRepository)
        createUserUseCase = new CreateUserUseCase(usersRepository)
    })

    test("should be able to delete a user", ()=>{
        expect(async ()=> {
            const { id } = await createUserUseCase.execute({
                first_name: 'Lucas',
                last_name: 'Dantas',
                password: "Adkad!321",
                phone: "0931993131",
                username: 'lucasmbrut@gmail.com'
            }) as User
            
            await deleteUserUseCase.execute(id as string);             
        }).not.toBeInstanceOf(AppError)
    })
})