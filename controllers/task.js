import { Task } from "../models/tasks.js";

export const createTask = async (req, res) => {
  try {
    const { title, description, userId } = req.body;

    if (!title || !description || !userId) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const task = await Task.create({ title, description, createdBy: userId });

    return res.status(201).json({ task });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
