import { Router } from "express";
import { getAllGames } from "../controllers/gameControllers.js";
const router = Router();

router.get("/games", getAllGames);

export default router;
