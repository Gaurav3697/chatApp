import express from "express";
import protectRoutes from "../middleware/protectedRoutes.js";
import {getmessage,sendMessage} from "../controllers/messageController.js"

const router = express.Router();

router.get("/:id",protectRoutes,getmessage);
router.post("/send/:id",protectRoutes,sendMessage);

export default router;
