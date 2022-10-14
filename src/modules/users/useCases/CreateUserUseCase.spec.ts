import { expect, test, describe, beforeEach } from "vitest"
import { AppError } from "../../../shared/errors/AppError";
import { InMemoryUsersRepository } from "../in-memory/repositories/InMemoryUserRepository"
import { CreateUserUseCase } from "./CreateUserUseCase"

let usersRepository: InMemoryUsersRepository;
let createUserUseCase: CreateUserUseCase;

describe("Create a user", () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    createUserUseCase = new CreateUserUseCase(usersRepository)
  })

  test("should be able to create a new user", async () => {

    await createUserUseCase.execute({
      first_name: 'test name',
      last_name: 'test lastname',
      password: '12345',
      phone: '123145',
      username: 'lucas@gmail.com'
    })

    const user = await usersRepository.findByEmail('lucas@gmail.com');
    expect(user).toHaveProperty('id');
  })

  test("should not be able to create a user with existent credentials", () => {
    const getUser = async () => {

      const mockedUser = {
        first_name: 'test name',
        last_name: 'test lastname',
        password: '12345',
        phone: '123145',
        username: 'lucas@gmail.com'
      }

      await createUserUseCase.execute(mockedUser)
      await createUserUseCase.execute(mockedUser)
    }

    expect(getUser()).rejects.toBeInstanceOf(AppError)
  })
})