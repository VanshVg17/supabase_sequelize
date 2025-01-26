import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import profileRoutes from "./routes/profileRoutes";
import eventRoutes from "./routes/eventRoutes";
import sequelize from "./config/database";

dotenv.config(); // Load environment variables

const app: Application = express();

// Middleware for JSON parsing
app.use(express.json());

// Logger middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  console.log(req.body);
  next();
});

// Profile routes
app.use("/api", profileRoutes);

// Event routes
app.use("/api", eventRoutes);

// Handle unknown routes
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Route not found" });
});

// Centralized error handling
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
