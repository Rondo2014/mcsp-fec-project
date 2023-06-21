import { Router } from "express";
import {
  getAllGames,
  getFeaturedGames,
  getGameById,
  getGameCategory,
  getRecommendedGames,
} from "../controllers/gameControllers.js";
import { logUserIn, registerUser } from "../controllers/logController.js";
import { hasPasswordMiddleware, protectRoutes } from "../authorization/auth.js";
import {
  AddToWishlist,
  removeFromWishlist,
  viewWishlist,
} from "../controllers/wishlistController.js";
import {
  AddToCart,
  removeFromCart,
  viewCart,
} from "../controllers/cartController.js";

const router = Router();
/**
 *  GAME ROUTES
 */
router.get("/games", getAllGames); // fetch all games
router.get("/games/featured", getFeaturedGames); // fetch featured games
router.get("/games/recommended", getRecommendedGames); // fetch recommended games
router.get("/games/:category", getGameCategory); // fetch games by category
router.get("/game/:id", getGameById); // fetch single game

/**
 * USER ROUTES
 */
router.post("/login", logUserIn);
router.post("/register", hasPasswordMiddleware, registerUser);

/**
 * WISHLIST ROUTES
 */
router.get("/wishlist", protectRoutes, viewWishlist);
router.post("/add/wishlist", protectRoutes, AddToWishlist);
router.post("/remove/wishlist", protectRoutes, removeFromWishlist);

/**
 * CART ROUTES
 */
router.get("/cart", protectRoutes, viewCart);
router.post("/add/cart", protectRoutes, AddToCart);
router.post("/remove/cart", protectRoutes, removeFromCart);

export default router;
