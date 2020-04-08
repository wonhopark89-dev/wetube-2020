import express from "express";
import routes from "../routers";
import {
  getUpload,
  postUpload,
  editVideo,
  deleteVideo,
  videoDetail,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);
videoRouter.get(routes.videoDetail(), videoDetail); // videoDetail is function

videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
