import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb://localhost:27017/food-del"
      // "mongodb+srv://ayushexe:GmjTM3v4q5NLZxr9@cluster0.etgy9wa.mongodb.net/food-del"
    )
    .then(() => console.log("DB connected"));
};

