import { Request, Response } from "express";
import supabase from "../services/supabaseClient";

// Create a new event
export const createEvent: any = async (req: Request, res: Response) => {
  const { profile_id, event_name, event_date } = req.body;

  if (!profile_id || !event_name || !event_date) {
    return res
      .status(400)
      .json({ error: "profile_id, event_name, and event_date are required" });
  }

  const { data, error } = await supabase
    .from("events")
    .insert([{ profile_id, event_name, event_date }]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(201).json({ message: "Event created successfully", data });
};

// Get all events
export const getEvents: any = async (req: Request, res: Response) => {
  const { data, error } = await supabase.from("events").select("*");

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json({ data });
};

// Get events by profile_id
export const getEventsByProfile: any = async (req: Request, res: Response) => {
  const { profile_id } = req.params;

  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("profile_id", profile_id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json({ data });
};

// Update an event by id
export const updateEvent: any = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { event_name, event_date } = req.body;

  const { data, error } = await supabase
    .from("events")
    .update({ event_name, event_date })
    .eq("id", id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json({ message: "Event updated successfully", data });
};

// Delete an event by id
export const deleteEvent: any = async (req: Request, res: Response) => {
  const { id } = req.params;

  const { data, error } = await supabase.from("events").delete().eq("id", id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json({ message: "Event deleted successfully", data });
};
