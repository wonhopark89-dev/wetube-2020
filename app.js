import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookeParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routers";
import { localMiddleware } from "./middlewares";

const app = express();

const handleHome = (req, res) => res.send("hello ! from home");
const handleProfile = (req, res) => res.send("you are on profile");

//https://expressjs.com/ko/4x/api.html#app.set
app.set("view engine", "pug");


// middle-ware -> 위에서 부터 순서대로 진행
app.use(cookeParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // from inform
app.use(morgan("combined"));
app.use(helmet());

app.use(localMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.user, userRouter);
app.use(routes.videos, videoRouter);

export default app;
