# Sequelize CLI Commands

## Create Migration File:

npx sequelize-cli migration:generate --name migration-example

## Running Migrations

npx sequelize-cli db:migrate

## Undoing Migrations

npx sequelize-cli db:migrate:undo
npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js
npx sequelize-cli db:migrate:undo --name XXXXXXXXXXXXXX-create-posts.js
