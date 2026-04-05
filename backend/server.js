import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import todoRoutes from "./routes/todoRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

/* MongoDB Connect */
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected 🚀"))
  .catch((err) => console.log(err));

/* Routes */
app.use("/api", todoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});