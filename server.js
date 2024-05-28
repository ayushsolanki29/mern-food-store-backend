import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoutes.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json()); //all req from frontend pass through this
app.use(cors()); // access from any frontend

//db connection
connectDB();

//api end points
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("Api Working");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
//mongodb+srv://ayushexe:<password>@cluster0.whdchx7.mongodb.net/?
