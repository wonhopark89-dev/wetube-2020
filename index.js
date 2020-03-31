const express = require("express");
const app = express();

// app.get("/", function(req, res) {
//   res.send("hello");
// });

const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
  res.send("hello ! from home");
}
function handleProfile(req, res) {
  res.send("you are on profile");
}

app.get("/profile", handleProfile);
app.get("/", handleHome);

app.listen(PORT, handleListening);
