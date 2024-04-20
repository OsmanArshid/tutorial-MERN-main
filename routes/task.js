import express from "express";
import { createTask } from "../controllers/task.js";

export const tasksRouter = express.Router();

tasksRouter.post("/create", createTask);

// localhost:8000/user/create
