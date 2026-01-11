import express from "express";
import { login, resetPassword, signin } from "../controllers/authController.js";
import { test } from "../controllers/testController.js";
import { defaultPermissions } from "../controllers/permissionController.js";

const router = express.Router();

// router.get("/", test);
router.post("/login", login);
router.post("/signin", signin);
router.post("/addRole", defaultPermissions);

router.patch("/resetPassword", resetPassword);

export default router;
