import { gameId, toWishlist } from "./queries.js";
import { db } from "../database/database.js";

export const AddToWishlist = async (req, res) => {
  try {
    const { gameId } = req.body;
    const id = Number(req.params.id);

    // if game ID is NaN return an error
    if (isNaN(gameId))
      return res.status(406).json({ message: "Invalid Game ID" });

    const results = await db.query(toWishlist, [gameId, id]);

    res
      .status(200)
      .json({ message: "Game Added To Wishlist", results: results.rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error Adding Game To Wishlist" });
  }
};
