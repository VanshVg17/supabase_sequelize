import express from "express";
import {
  createProfile,
  deleteProfile,
  getProfiles,
  updateProfile,
} from "../controllers/profileController";

const router = express.Router();

router.post("/profiles", createProfile);
router.put("/profiles/:id", updateProfile);
router.delete("/profiles/:id", deleteProfile);
router.get("/profiles", getProfiles);

export default router;
