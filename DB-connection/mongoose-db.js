import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

export const dbConnection = async () => {
  try {
    await mongoose.connect(url);
    console.log("DB connected successfully");
  } catch (err) {
    console.log("Something went wrong", err);
    process.exit(1);
  }
};
