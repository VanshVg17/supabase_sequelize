import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import path from "path";
import Bio from "../models/Bio";

dotenv.config();

const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.SUPABASE_HOST,
  port: 5432,
  database: process.env.SUPABASE_DB_NAME,
  username: process.env.SUPABASE_USER,
  password: process.env.SUPABASE_PASSWORD,
  models: [path.resolve(__dirname, "models")], // Correctly resolve the path
  logging: console.log, // Enable query logging (optional)
});

sequelize.addModels([Bio]);

export default sequelize;
