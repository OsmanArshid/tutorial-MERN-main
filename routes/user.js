import express from "express";
import { createUser, getUsers } from "../controllers/user.js";

export const userRouter = express.Router();

userRouter.post("/create", createUser);
userRouter.post("/get", getUsers);

// localhost:8000/user/get
