import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthUserUseCase } from "./AuthUserUseCase";

export class AuthUserController {
    async handle(req: Request, res:Response ): Promise<Response>{
        const { password, confirmPassword, username } = req.body
        const authUserUseCase = container.resolve(AuthUserUseCase);
        
        const authToken = await authUserUseCase.execute({
            confirmPassword,
            password,
            username
        })
        
        return res.status(201).json(authToken);
    }
}