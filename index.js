import express from "express";
const app = express();

const PORT = 4000;
const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("hello ! from home");
const handleProfile = (req, res) => res.send("you are on profile");
const handleBetween = (req, res, next) => {
  console.log("between ~ ");
  next();
};

app.use(handleBetween);ç
app.get("/profile", handleProfile);
app.get("/", handleBetween, handleHome);

app.listen(PORT, handleListening);
