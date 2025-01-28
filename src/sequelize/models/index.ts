import fs from "fs";
import path from "path";
import { ModelCtor, Sequelize } from "sequelize-typescript";
import { config } from "dotenv";

config();

let db: Sequelize;

export const initSequelize = () => {
  const _basename = path.basename(module.filename);
  const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
    dialect: "postgres",
  });

  const _models = fs
    .readdirSync(__dirname)
    .filter((file: string) => {
      return (
        file !== _basename &&
        file !== "interfaces" &&
        file.slice(-5) !== ".d.ts" &&
        (file.slice(-3) === ".js" || file.slice(-3) === ".ts")
      );
    })
    .map((file: string) => {
      const model: ModelCtor = require(path.join(__dirname, file))?.default;
      return model;
    });

  sequelize.addModels(_models);
  return sequelize;
};

db = initSequelize();

export default db;
