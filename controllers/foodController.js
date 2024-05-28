import categoryModel from "../models/categorySchema.js";
import foodModel from "../models/foodModel.js";
import fs from "fs";

// add food item
const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Faild to Add" });
  }
};

// food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Faild to Fetch" });
  }
};

//remove food item
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Faild to Delete" });
  }
};
// add category
const addCategory = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const category = new categoryModel({
    category: req.body.category,
    image: image_filename,
  });
  try {
    await category.save();
    res.json({ success: true, message: "Category Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Faild to Category" });
  }
};
//get all category
const fetchCategory = async (req, res) => {
  try {
    const category = await categoryModel.find({});
    res.json({ success: true, data: category });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Faild to Fetch" });
  }
};
//remove food item
const removeCategory = async (req, res) => {
  try {
    const category = await categoryModel.findById(req.body.id);
    fs.unlink(`uploads/${category.image}`, () => {});
    await categoryModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "category Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Faild to Delete" });
  }
};
export {
  addFood,
  listFood,
  removeFood,
  addCategory,
  fetchCategory,
  removeCategory,
};
