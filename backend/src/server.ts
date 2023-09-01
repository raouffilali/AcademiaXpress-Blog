import dotenv from "dotenv";
import express from "express";
import connectDB from "../config/db";
import {
  errorResponseHandler,
  invalidPathHandler,
} from "../middleware/errorHandler";

// Routes
import userRoutes from "../routes/userRoutes";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/users", userRoutes);

app.use(invalidPathHandler);
app.use(errorResponseHandler);

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log("Server running on port: " + PORT);
});
