import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        username: {type: String, required: true, unique: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        group: { type: String, default: "teacher" }
    },
    { timestamps: true }
);

const User = new mongoose.model("User", userSchema);
export default User;