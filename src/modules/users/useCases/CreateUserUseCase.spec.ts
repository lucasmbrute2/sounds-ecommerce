import { expect, test, describe, beforeEach } from "vitest"
import { InMemoryUsersRepository } from "../in-memory/repositories/InMemoryUserRepository"
import { CreateUserUseCase } from "./CreateUserUseCase"

describe("Create a user", () => {
  beforeEach(() => {

  })

  test("should be able to create a new user", async () => {
    const userRepository = new InMemoryUsersRepository()
    const createUserUseCase = new CreateUserUseCase(userRepository)

    await createUserUseCase.execute({
      first_name: 'test name',
      last_name: 'test lastname',
      password: '12345',
      phone: '123145',
      username: 'lucas@gmail.com'
    })

    const user = await userRepository.findByEmail('lucas@gmail.com');

    expect(user).toHaveProperty('id');
  })
})