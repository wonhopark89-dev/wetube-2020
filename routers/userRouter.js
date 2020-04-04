import express from "express";
import routes from "../routers";
import {
  user,
  userDetail,
  editProfile,
  changePassword,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.user, user);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
