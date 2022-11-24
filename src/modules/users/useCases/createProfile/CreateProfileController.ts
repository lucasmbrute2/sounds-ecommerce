import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProfileUseCase } from "./CreateProfileUseCase";

export class CreateProfileController {
    async handle(req: Request, res: Response): Promise<Response> {
        //@ts-ignore
        const { id } = req.user
        const createProfileUseCase = container.resolve(CreateProfileUseCase)
        //TO DO USE STORAGE ABSTRACTIONJ
        await createProfileUseCase.execute({
            photo,
            id
        })

    }
}