import { Router } from "express";
import multer from "multer";
import upload from "../../../configs/uploads/upload";
import { AuthUserController } from "../../../modules/users/useCases/authUser/AuthUserController";
import { CreateProfileController } from "../../../modules/users/useCases/createProfile/CreateProfileController";
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
const createProfileController = new CreateProfileController()

const createProfileMulter = multer(upload)

userRouter.post("/create", createUserController.handle)
userRouter.post("/create/address/:user_id", createUserAddressController.handle)
userRouter.post("/auth" , authUserController.handle)
userRouter.get("/list", ensureAuthentication, listUsersController.handle)
userRouter.get("/delete/:id", deleteUserController.handle)
userRouter.post("/create/profile", ensureAuthentication, createProfileMulter.single('profile') , createProfileController.handle)

export { userRouter }