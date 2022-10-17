import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserDTO } from "../../DTO/CreateUserDTO";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { first_name, last_name, password, phone, username }: CreateUserDTO = req.body;
    const createUserUseCase = container.resolve(CreateUserUseCase)

    await createUserUseCase.execute({
      first_name,
      last_name,
      password,
      phone,
      username
    })

    return res.status(201).send();
  }
}