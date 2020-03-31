import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookeParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;
const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("hello ! from home");
const handleProfile = (req, res) => res.send("you are on profile");

// middle-ware -> 위에서 부터 순서대로 진행 
app.use(cookeParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // from inform
app.use(morgan("combined"));
app.use(helmet());

app.get("/profile", handleProfile);
app.get("/", handleHome);

app.listen(PORT, handleListening);
