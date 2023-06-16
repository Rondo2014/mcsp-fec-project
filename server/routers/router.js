import { Router } from "express";
import { getAllGames, getGameById } from "../controllers/gameControllers.js";
import { logUserIn, registerUser } from "../controllers/logController.js";
import { hasPasswordMiddleware } from "../auth.js";
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

export default router;
