import { Router } from "express";
import { getAllGames, getGameById } from "../controllers/gameControllers.js";
import { logUserIn, registerUser } from "../controllers/logController.js";
import { hasPasswordMiddleware, protectRoutes } from "../auth.js";
import { AddToWishlist } from "../controllers/wishlistController.js";
const router = Router();
/**
 *  GAME ROUTES
 */
router.get("/games", getAllGames); // fetch all games
router.get("/game-id/:id", getGameById); // fetch single game

/**
 * USER ROUTES
 */
router.post("/login", logUserIn);
router.post("/register", hasPasswordMiddleware, registerUser);
router.post("/wishlist/:id", protectRoutes, AddToWishlist);

export default router;
