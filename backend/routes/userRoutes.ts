import express from "express";
import {
  registerUser,
  loginUser,
  userProfile,
  updateProfile,
  getUsers,
} from "../controllers/userControllers";
import { authGuard } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authGuard, userProfile);
router.put("/updateProfile", authGuard, updateProfile);
router.get("/allUsers",getUsers);

export default router;
