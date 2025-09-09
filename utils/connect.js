import mongoose from "mongoose";

const mongoUrl = process.env.MONGO_URL;

export default function connectToDb(){
  mongoose
    .connect(mongoUrl)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB", err);
    });
};
