import express from "express";
import protectedRoutes from "../middleware/protectedRoutes.js"
import { getuserforsidebar } from "../controllers/userController.js";

const router = express.Router();

router.get("/allusers", protectedRoutes, getuserforsidebar);

export default router;