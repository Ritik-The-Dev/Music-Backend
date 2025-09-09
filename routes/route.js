import express from "express";
import axios from "axios";

const router = express.Router();
const apiURL = process.env.API_URL;

router.get("/search", async (req, res) => {
  if (!apiURL) return res.status(500).json({ error: "API URL not configured" });

  const { query } = req.query;
  if (!query) return res.status(400).json({ error: "Query is required" });

  try {
    const response = await axios.get(`${apiURL}?query=${query}`);
    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
