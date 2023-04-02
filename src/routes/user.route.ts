import { Router } from "express";
import { UserController } from "../controllers/user.controller";

export const userRouter = Router();

const userController = new UserController();

userRouter.get("/", userController.getAllUsers);

userRouter.get("/byId/:id", userController.getUserById);

userRouter.post("/", userController.createUser);

userRouter.patch("/:id", userController.updateUser);

userRouter.delete("/:id", userController.deleteUser);

