import { Router } from "express";
import {
  getAllGames,
  getFeaturedGames,
  getGameById,
  getRecommendedGames,
} from "../controllers/gameControllers.js";
import { logUserIn, registerUser } from "../controllers/logController.js";
import { hasPasswordMiddleware, protectRoutes } from "../auth.js";
import {
  AddToWishlist,
  removeFromWishlist,
  viewWishlist,
} from "../controllers/wishlistController.js";

const router = Router();
/**
 *  GAME ROUTES
 */
router.get("/games", getAllGames); // fetch all games
router.get("/games/featured", getFeaturedGames);
router.get("/games/recommended", getRecommendedGames);
router.get("/game/:id", getGameById); // fetch single game

/**
 * USER ROUTES
 */
router.post("/login", logUserIn);
router.post("/register", hasPasswordMiddleware, registerUser);
router.get("/wishlist/:id", protectRoutes, viewWishlist);
router.post("/wishlist/:id", protectRoutes, AddToWishlist);
router.post("/remove/wishlist/:id", protectRoutes, removeFromWishlist);

export default router;
