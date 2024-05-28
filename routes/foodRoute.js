import express from "express";
import {
  addCategory,
  addFood,
  fetchCategory,
  listFood,
  removeCategory,
  removeFood,
} from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

//image storage Engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);
foodRouter.post("/add-category", upload.single("image"), addCategory);
foodRouter.get("/fetch-category", fetchCategory);
foodRouter.post("/remove-category", removeCategory);

export default foodRouter;
