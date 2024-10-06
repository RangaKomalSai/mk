import express from "express";
import { signupUser, loginUser, reqeustOTP, verifyOTP } from "../controllers/UserController.js";

const router = express.Router();

// Route to register a new user
router.post("/signup", signupUser);

// Route to login a user
router.post("/login", loginUser);


// Route to OTP Sending
router.post("/reqeustOTP", reqeustOTP);


//Route to OTP Verification
router.post("/verifyOTP", verifyOTP);

export default router;
