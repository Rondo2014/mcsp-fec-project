import { db } from "../database/database.js";
import { allGames, featuredGames, gameId } from "./queries.js";

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

// fetches games that are on sale in the database
export const getFeaturedGames = async (req, res) => {
  try {
    const results = await db.query(featuredGames);
    // if there is no data on featured games send user a message
    if (results.rowCount === 0)
      return res.status(400).json({ message: "No Featured Games" });

    res.status(200).json(results.rows);
  } catch (error) {}
};
