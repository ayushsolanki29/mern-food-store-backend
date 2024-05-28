import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import { response } from "express";

//login user
const loginUser = async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not Found!" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Password is Invalid" });
    }
    const token = createToken(user._id);
    res.json({ success: true, token, message: "Login Successfull!" });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "something wrong Login to account",
    });
  }
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//register user
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    //checking is user already exists
    const exist = await userModel.findOne({ email });
    if (exist) {
      return res.json({ success: false, message: "User Already Exist!" });
    }
    //validating email formate & srtong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please Enter a Valid Email!",
      });
    }
    if (password.length < 6) {
      return res.json({
        success: false,
        message: "Please Enter 6 Digit or More strong Password",
      });
    }
    //hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token, message: "Account Created Successfull!" });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "something wrong creating account",
    });
  }
};
//fetch all users

const fetchUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.json({ success: true, data: users });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error While Fetch users!" });
  }
};

const removeUser = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "User Deleted!" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Faild to Delete" });
  }
};
export { loginUser, registerUser, fetchUsers, removeUser };
