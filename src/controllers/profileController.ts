import supabase from "../services/supabaseClient";
import { Request, Response } from "express";

// Create a new profile
export const createProfile: any = async (req: Request, res: Response) => {
  const { display_name, bio } = req.body;

  if (!display_name) {
    return res.status(400).json({ error: "display_name are required" });
  }

  const { data, error } = await supabase
    .from("profiles")
    .insert([{ display_name, bio }]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(201).json({ message: "Profile created successfully", data });
};

// Get all profiles
export const getProfiles: any = async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from("profiles")
    .select(`id,display_name,bio`);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json({ data });
};

// Update a profile by id
export const updateProfile: any = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { display_name, bio } = req.body;

  const { data, error } = await supabase
    .from("profiles")
    .update({ display_name, bio })
    .eq("id", id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json({ message: "Profile updated successfully", data });
};

// Delete a profile by id
export const deleteProfile: any = async (req: Request, res: Response) => {
  const { id } = req.params;

  const { data, error } = await supabase.from("profiles").delete().eq("id", id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json({ message: "Profile deleted successfully", data });
};
