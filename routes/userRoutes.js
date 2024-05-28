import express from "express"
import { fetchUsers, loginUser, registerUser, removeUser } from "../controllers/userController.js"

const userRouter = express.Router();

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.post("/remove-user",removeUser)
userRouter.get("/fetchUsers",fetchUsers)

export default userRouter;