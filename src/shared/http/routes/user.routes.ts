import { Router } from "express";
import { CreateUserController } from "../../../modules/users/useCases/createUser/CreateUserController";
import { CreateUserAddressController } from "../../../modules/users/useCases/createUserAddress/CreateUserAddressController";
const userRouter = Router();

const createUserController = new CreateUserController();
const createUserAddressController = new CreateUserAddressController();

userRouter.post("/create", createUserController.handle)
userRouter.post("/create/address/:user_id", createUserAddressController.handle)

export { userRouter }