import { outCart, cart, toCart, cartGameCheck } from "./queries.js";
import { db } from "../database/database.js";
import { headerDecoder } from "../authorization/auth.js";

export const viewCart = async (req, res) => {
  try {
    const token = headerDecoder(req.headers.authorization);

    const id = Number(token.id);

    const results = await db.query(cart, [id]);

    // if there are no items in the cart send user a message
    if (results.rowCount === 0)
      return res.status(200).json({ message: "No Games In Cart" });

    res.status(200).json(results.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error Fetching Cart" });
  }
};

export const AddToCart = async (req, res) => {
  try {
    const token = headerDecoder(req.headers.authorization);
    const { gameId } = req.body;

    const id = Number(token.id);

    // if game ID is NaN return an error
    if (isNaN(gameId))
      return res.status(406).json({ message: "Invalid Game ID" });

    // if game id exists already send an error
    const cartCheck = await db.query(cartGameCheck, [id]);

    const cart = cartCheck.rows[0].cart;

    // if wishist is not empty and does already include game id send user a message
    if (cart != null && cart.includes(Number(gameId)))
      return res.status(406).json({ message: "Game Already Exists In Cart" });

    // send game to cart
    const results = await db.query(toCart, [gameId, id]);

    res
      .status(200)
      .json({ message: "Game Added To Cart", results: results.rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error Adding Game To Cart" });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const token = headerDecoder(req.headers.authorization);
    const { gameId } = req.body;
    const id = Number(token.id);

    // if game ID is NaN return an error
    if (isNaN(gameId))
      return res.status(406).json({ message: "Invalid Game ID" });

    // if cart is empty return the user a message
    const cartCheck = await db.query(cartGameCheck, [id]);
    console.log(cartCheck.rows[0].cart);
    const cart = cartCheck.rows[0].cart;

    if (cart.length === 0)
      return res.status(406).json({ message: "Cart Is Empty" });

    // if wishist is not empty and does already include game id send user a message
    if (cart != null && !cart.includes(Number(gameId)))
      return res.status(406).json({ message: "Game Not Present In Cart" });

    const results = await db.query(outCart, [gameId, id]);

    res
      .status(200)
      .json({ message: "Game Removed From Cart", results: results.rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error Removing Game From Cart" });
  }
};
