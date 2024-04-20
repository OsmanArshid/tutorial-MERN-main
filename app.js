import express from "express";
import cors from "cors";
import { userRouter } from "./routes/user.js";
import { tasksRouter } from "./routes/task.js";

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/task", tasksRouter);

// localhost:8000/user
