import { User } from "../models/user-model.js";
import bcrypt from "bcryptjs";

export const signupController = async (req,resp) => {
    try {
        const {email, phone, password} = req.body;
    }
    catch (error) {
        return resp.status(500).json({success : false, message : error.message});
    }
}
