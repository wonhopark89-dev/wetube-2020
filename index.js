const express = require("express");
const app = express();

// app.get("/", function(req, res) {
//   res.send("hello");
// });

const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);
