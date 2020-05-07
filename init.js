import "./db";
import app from "./app";
import dotenv from "dotenv";

// Loads .env file contents into | process.env. Example: 'KEY=value' becomes { parsed: { KEY: 'value' } }
dotenv.config();
import "./models/Video";

const PORT = process.env.PORT || 4000;
const handleListening = () => {
  console.log(`✅ Listening on: http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
