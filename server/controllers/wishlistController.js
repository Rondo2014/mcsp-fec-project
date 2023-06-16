import {
  gameId,
  outWishlist,
  toWishlist,
  wishGameCheck,
  wishlist,
} from "./queries.js";
import { db } from "../database/database.js";

export const viewWishlist = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const results = await db.query(wishlist, [id]);

    // if there are no items in the wishlist send user a message
    if (results.rowCount === 0)
      return res.status(200).json({ message: "No Games In Wishlist" });

    res.status(200).json(results.rows);
  } catch (error) {
    console.lerror(error);
    res.status(500).json({ message: "Error Fetching Wishlist" });
  }
};

export const AddToWishlist = async (req, res) => {
  try {
    const { gameId } = req.body;
    const id = Number(req.params.id);

    // if game ID is NaN return an error
    if (isNaN(gameId))
      return res.status(406).json({ message: "Invalid Game ID" });

    // if game id exists already send an error
    const wishlistCheck = await db.query(wishGameCheck, [id]);
    const wishlist = wishlistCheck.rows[0].wishlist;

    if (wishlist.includes(gameId))
      return res
        .status(406)
        .json({ message: "Game Already Exists In Wishlist" });

    const results = await db.query(toWishlist, [gameId, id]);

    res
      .status(200)
      .json({ message: "Game Added To Wishlist", results: results.rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error Adding Game To Wishlist" });
  }
};

export const removeFromWishlist = async (req, res) => {
  try {
    const { gameId } = req.body;
    const id = Number(req.params.id);

    // if game ID is NaN return an error
    if (isNaN(gameId))
      return res.status(406).json({ message: "Invalid Game ID" });

    const results = await db.query(outWishlist, [gameId, id]);

    res
      .status(200)
      .json({ message: "Game Removed From Wishlist", results: results.rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error Removing Game From Wishlist" });
  }
};
