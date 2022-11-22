import { Router } from "express";
import { AuthUserController } from "../../../modules/users/useCases/authUser/AuthUserController";
import { CreateUserController } from "../../../modules/users/useCases/createUser/CreateUserController";
import { CreateUserAddressController } from "../../../modules/users/useCases/createUserAddress/CreateUserAddressController";
import { DeleteUserController } from "../../../modules/users/useCases/deleteUser/DeleteUserController";
import { ListUsersController } from "../../../modules/users/useCases/listUsers/ListUsersController";
import { ensureAuthentication } from "../middlewares/ensureAuth";
const userRouter = Router();

const createUserController = new CreateUserController();
const createUserAddressController = new CreateUserAddressController();
const authUserController = new AuthUserController()
const listUsersController = new ListUsersController()
const deleteUserController = new DeleteUserController()


userRouter.post("/create", createUserController.handle)
userRouter.post("/create/address/:user_id", createUserAddressController.handle)
userRouter.post("/auth" , authUserController.handle)
userRouter.get("/list", ensureAuthentication, listUsersController.handle)
userRouter.get("/delete/:id", deleteUserController.handle)

export { userRouter }