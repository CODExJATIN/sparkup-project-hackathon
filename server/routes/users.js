import express from "express";
import {
  getUser,
  getUserConnection,
  addRemoveConnection,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getUser);
router.get("/:id/connections", verifyToken, getUserConnection);

/* UPDATE */
router.patch("/:id/:connectionId", verifyToken, addRemoveConnection);

export default router;