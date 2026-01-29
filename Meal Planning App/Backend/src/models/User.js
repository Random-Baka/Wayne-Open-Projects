import mongoose from "mongoose";

// Define the User schema
// Each user has a name, email, and password.
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true });

// Export the User model
export default mongoose.model("User", userSchema);