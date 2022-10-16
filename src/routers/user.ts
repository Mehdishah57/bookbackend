import { Router } from "express";
import activate from "../controllers/user/activate/activate";
import changePassword from "../controllers/user/changePassword/changePassword";
import deleteUser from "../controllers/user/delete/deleteUser";
import getUsers from "../controllers/user/getUsers/getUsers";
import login from "../controllers/user/login/login";
import refresh from "../controllers/user/refresh/refresh";
import register from "../controllers/user/register/register";
import auth from "../middlewares/auth";

const userRouter = Router();

userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.get("/refresh", auth, refresh);
userRouter.patch("/changePassword", auth, changePassword);
userRouter.get("/", auth, getUsers);
userRouter.get("/status/:id", auth, activate);
userRouter.delete("/:id", auth, deleteUser);

export default userRouter;