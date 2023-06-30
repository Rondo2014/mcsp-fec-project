import { db } from "../database/database.js";
import { createClient } from "redis";
import {
  allGames,
  featuredGames,
  gameCategory,
  gameId,
  recommendedGames,
} from "./queries.js";

const client = createClient();
await client.connect();

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

// fetches games that are on the recommended carousel
export const getRecommendedGames = async (req, res) => {
  try {
    if ((await client.exists("recommendedGames")) === 1) {
      const data = await client.get("recommendedGames");
      return res.status(200).json(JSON.parse(data));
    } else {
      const results = await db.query(recommendedGames);
      if (results.rowCount === 0) {
        return res.status(400).json({ message: "No Recommended Games" });
      }
      // Store the data in the cache
      client.set(
        "recommendedGames",
        3600, // Cache expiration time in seconds (e.g., 1 hour)
        JSON.stringify(results.rows)
      );
      // Return the data to the client
      res.status(200).json(results.rows);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error While Fetching Games" });
  }
};

// fetches games that are on sale in the database
export const getFeaturedGames = async (req, res) => {
  try {
    if ((await client.exists("featuredGames")) === 1) {
      const data = await client.get("featuredGames");
      return res.status(200).json(JSON.parse(data));
    } else {
      const results = await db.query(featuredGames);
      // if there is no data on featured games send user a message
      if (results.rowCount === 0)
        return res.status(400).json({ message: "No Featured Games" });

      client.set(
        "featuredGames",
        3600, // Cache expiration time in seconds (e.g., 1 hour)
        JSON.stringify(results.rows)
      );
      res.status(200).json(results.rows);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error While Fetching Games" });
  }
};

// fetches games by a specific category
export const getGameCategory = async (req, res) => {
  try {
    const category = req.params.id;
    const results = await db.query(gameCategory, [category]);
    // if no game data is returned from the database send user a message
    if (results.rowCount === 0)
      return res.status(200).json({ message: "No Games In This Category" });

    // send data
    res.status(200).json(results.rows);

    //
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error While Fetching Games" });
  }
};
