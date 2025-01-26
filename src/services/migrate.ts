import sequelize from "../config/database";

const runMigrations = async () => {
  try {
    // Authenticate database connection
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    // Sync models to create/update tables
    await sequelize.sync({ force: false }); // Use force: true to drop & recreate the tables
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to run migrations:", error);
  } finally {
    await sequelize.close();
  }
};

runMigrations();
