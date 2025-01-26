import express from "express";
import {
  createEvent,
  deleteEvent,
  getEvents,
  getEventsByProfile,
  updateEvent,
} from "../controllers/eventController";

const router = express.Router();

router.post("/events", createEvent);
router.put("/events/:id", updateEvent);
router.delete("/events/:id", deleteEvent);
router.get("/profiles/:profile_id/events", getEventsByProfile);
router.get("/events", getEvents);

export default router;
