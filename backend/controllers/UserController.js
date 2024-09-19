import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
