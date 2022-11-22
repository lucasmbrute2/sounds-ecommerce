import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const deleteUserUseCase = container.resolve(DeleteUserUseCase)
        const { id } = req.params;

        await deleteUserUseCase.execute(id);
        return res.status(201).send();
    }
}