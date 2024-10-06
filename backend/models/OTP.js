import mongoose from "mongoose";


const { Schema } = mongoose;


const OTPSchema = new Schema({
    email: { type: String, required: true },
    otp: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const OTP = mongoose.model("OTP", OTPSchema);
export default OTP;