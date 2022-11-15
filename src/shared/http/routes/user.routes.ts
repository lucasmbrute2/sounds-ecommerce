import { Router } from "express";
import { AuthUserController } from "../../../modules/users/useCases/authUser/AuthUserController";
import { CreateUserController } from "../../../modules/users/useCases/createUser/CreateUserController";
import { CreateUserAddressController } from "../../../modules/users/useCases/createUserAddress/CreateUserAddressController";
const userRouter = Router();

const createUserController = new CreateUserController();
const createUserAddressController = new CreateUserAddressController();
const authUserController = new AuthUserController()

userRouter.post("/create", createUserController.handle)
userRouter.post("/create/address/:user_id", createUserAddressController.handle)
userRouter.post('/auth' , authUserController.handle)

export { userRouter }