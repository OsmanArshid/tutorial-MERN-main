// Basically all the logic of server

// func that are called in server for data input

import { User } from "../models/user.js";

export const createUser = async (req, res) => {
  try {
    const { name, username, age } = req.body;

    if (!name || !username || !age) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const user = await User.create({ name, username, age });

    return res.status(201).json({ user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }

    const users = await User.find({ name: name });

    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
