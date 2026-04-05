import mongoose from "mongoose";
import dotenv from "dotenv";
import Todo from "./models/Todo.js";

dotenv.config();

/* Sample Data */
const seedTodos = [
  { title: "Learn React", completed: false },
  { title: "Learn Node.js", completed: false },
  { title: "Build Todo App", completed: true },
];

/* Connect DB */
mongoose
  .connect(process.env.MONGO_URL)
  .then(async () => {
    console.log("MongoDB Connected 🚀");

    /* Clear old data */
    await Todo.deleteMany();

    /* Insert new seed data */
    await Todo.insertMany(seedTodos);

    console.log("Seed Data Inserted ✅");

    process.exit();
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });