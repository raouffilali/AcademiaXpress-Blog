import dotenv from "dotenv";
import express from "express";
import connectDB from "../config/db";
import env from "../utils/validateEnv";

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World");
});
const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log("Server running on port: " + PORT);
});
