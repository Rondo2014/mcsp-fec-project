import {
  gameId,
  outWishlist,
  toWishlist,
  wishGameCheck,
  wishlist,
} from "./queries.js";
import { db } from "../database/database.js";
import jwt from "jsonwebtoken";
import { promisify } from "util";
import { headerDecoder } from "../authorization/auth.js";

export const viewWishlist = async (req, res) => {
  try {
    const token = headerDecoder(req.headers.authorization);

    const id = Number(token.id);

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
    const token = headerDecoder(req.headers.authorization);
    const { gameId } = req.body;

    const id = Number(token.id);

    // if game ID is NaN return an error
    if (isNaN(gameId))
      return res.status(406).json({ message: "Invalid Game ID" });

    // if game id exists already send an error
    const wishlistCheck = await db.query(wishGameCheck, [id]);
    console.log(wishlistCheck.rows[0].wishlist);
    const wishlist = wishlistCheck.rows[0].wishlist;

    // if wishist is not empty and does already include game id send user a message
    if (wishlist != null && wishlist.includes(Number(gameId)))
      return res
        .status(406)
        .json({ message: "Game Already Exists In Wishlist" });

    // send game to wishlist
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
    const token = headerDecoder(req.headers.authorization);
    const { gameId } = req.body;
    const id = Number(token.id);

    // if game ID is NaN return an error
    if (isNaN(gameId))
      return res.status(406).json({ message: "Invalid Game ID" });

    // if wishlist is empty return the user a message
    const wishlistCheck = await db.query(wishGameCheck, [id]);
    console.log(wishlistCheck.rows[0].wishlist);
    const wishlist = wishlistCheck.rows[0].wishlist;

    if (wishlist.length === 0)
      return res.status(406).json({ message: "Wishlist Is Empty" });

    // if wishist is not empty and does already include game id send user a message
    if (wishlist != null && !wishlist.includes(Number(gameId)))
      return res.status(406).json({ message: "Game Not Present In Wishlist" });

    const results = await db.query(outWishlist, [gameId, id]);

    res
      .status(200)
      .json({ message: "Game Removed From Wishlist", results: results.rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error Removing Game From Wishlist" });
  }
};
