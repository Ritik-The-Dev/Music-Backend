import dotenv from "dotenv";
import cors from "cors";
import express from "express";
// import connectToDb from "./utils/connect.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
// connectToDb();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", (await import("./routes/route.js")).default);
