import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { configEnv } from "../../../configs/dotenv";
import { AppError } from "../../errors/AppError";

interface IPayload {
    sub: string
}

export async function ensureAuthentication(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    if (!authHeader) throw new AppError("Token missing", 401)

    const [_, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(token, configEnv.jwt.secret as string) as IPayload

        //@ts-ignore
        req.user = {
            id: user_id
        }

        return next();

    } catch (error) {
        throw new AppError("Invalid token", 401)
    }

}