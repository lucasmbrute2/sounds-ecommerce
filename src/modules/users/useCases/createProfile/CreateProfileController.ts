import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProfileUseCase } from "./CreateProfileUseCase";

export class CreateProfileController {
    async handle(req: Request, res: Response): Promise<Response> {
        //@ts-ignore
        const { id } = req.user
        const photo = req.file?.filename as string

        const createProfileUseCase = container.resolve(CreateProfileUseCase)
        const profile = await createProfileUseCase.execute({
            photo, 
            user_id: id
        })

        return res.status(201).json({
            profile
        });
    }
}