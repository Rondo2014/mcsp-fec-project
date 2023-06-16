import { db } from "../database/database.js";
import { allGames, gameId } from "./queries.js";

// fetches all games from Database
export const getAllGames = async (req, res) => {
  try {
    const results = await db.query(allGames);
    res.status(200).json(results.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error Fetching Games" });
  }
};

// fetches a single game from the Database based on the id
export const getGameById = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const results = await db.query(gameId, [id]);
    res.status(200).json(results.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error While Fetching Game" });
  }
};
