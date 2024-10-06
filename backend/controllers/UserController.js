import User from "../models/User.js";
import OTP from "../models/OTP.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendEmail } from "../utils/email.js";

// Secret key for JWT (keep this secret in environment variables)
const JWT_SECRET = "only_secret_you_know_shhh";

export const signupUser = async (req, res) => {
  const {
    email,
    password,
    title,
    firstName,
    lastName,
    dateOfBirth,
    subscribe,
  } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user and save to the database
    const newUser = new User({
      email,
      password: hashedPassword,
      title,
      firstName,
      lastName,
      dateOfBirth,
      subscribe: subscribe || false, // Default to false if not provided
    });

    await newUser.save();

    // Generate a JWT token after successful signup
    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email }, // Payload: user ID and email
      JWT_SECRET, // Secret key from environment variables
      { expiresIn: "1h" } // Token expiration time (1 hour in this case)
    );

    // Respond with a success message and the token
    res.status(201).json({ message: "User created successfully", token });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Server error" });
  }
};
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Compare the entered password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: "1h" } // Token expires in 1 hour
    );

    // Return the token
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Server error" });
  }
};


export const reqeustOTP = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error sending OTP:", error);
    res.status(500).json({ message: "Server error" });
  }

  //generate OTP
  const otp = Math.floor(100000 + Math.random() * 900000);


  const newOTP = new OTP({ email, otp });

  // Remove any existing OTP for the user
  const pastOTP = await OTP.findOne({ email: email });
  if (pastOTP) {
    await pastOTP.deleteOne();
  }

  // Save the OTP in the database
  await newOTP.save();

  const subject = "OTP Request";
  const message = `OTP for password reset for email : ${email}`;
  const html = `
          <p>Hi,</p>
          <p>You requested to reset your password. Use the following OTP to reset it:</p>
          <h2>${otp}</h2>
          <p>This OTP is valid for 10 minutes.</p>
          <p>If you did not request this, please ignore this email.</p>
          <p>Thanks,<br/>Harmaig Team</p>
        `;

  // Send the OTP to the user's email
  sendEmail(email, otp, subject, html);

  // Send the Response To The User
  res.status(200).json({ message: "OTP sent successfully" });

}

export const verifyOTP = async (req, res) => {
  const { email, otp, password } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ message: "Email and OTP are required" });
  }


  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Check if the OTP is valid
    const pastOTP = await OTP.findOne({ email: email });
    if (!pastOTP) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    if (otp !== pastOTP.otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    // Remove the OTP from the database
    await pastOTP.deleteOne();

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the user's password
    user.password = hashedPassword;
    await user.save();

    // Send the Response To The User
    res.status(200).json({ message: "Password reset successful" });

  } catch (error) {
    console.error("Error verifying OTP:", error);
    res.status(500).json({ message: "Server error" });
  }

}