import express from "express";
const app = express();

// app.get("/", function(req, res) {
//   res.send("hello");
// });

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("hello ! from home");

const handleProfile = (req, res) => res.send("you are on profile");

app.get("/profile", handleProfile);
app.get("/", handleHome);

app.listen(PORT, handleListening);
