import express from "express";

import { getAdminDashboardData } from "../controllers/adminController.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("admin route is live");
});

router.get("/dashboard", verifyToken, getAdminDashboardData);

export default router;
