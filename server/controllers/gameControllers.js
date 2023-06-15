import { db } from "../database/database.js";
import { allGames } from "./queries.js";

export const getAllGames = async (req, res) => {
  try {
    const results = await db.query(allGames);
    res.status(200).json(results.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error Fetching Games" });
  }
};
