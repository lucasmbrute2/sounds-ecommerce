import { Router } from "express";
import { CreateUserController } from "../../../modules/users/useCases/CreateUserController";
const userRouter = Router();

const createUserController = new CreateUserController();

userRouter.post("/create", createUserController.handle)

export { userRouter }