import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true, // Ensure each email is unique
    },
    password: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      enum: ["Mr", "Miss", "Mrs", "Ms", "Prefer Not to Say"],
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    subscribe: {
      type: Boolean,
      default: false,
    },

  },

  { timestamps: true } // This will add createdAt and updatedAt timestamps automatically
);

const User = mongoose.model("User", UserSchema);
export default User;
