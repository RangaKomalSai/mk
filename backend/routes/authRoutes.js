import express from "express";
import { signupUser, loginUser } from "../controllers/UserController.js";

const router = express.Router();

// Route to register a new user
router.post("/signup", signupUser);

// Route to login a user
router.post("/login", loginUser);

export default router;
