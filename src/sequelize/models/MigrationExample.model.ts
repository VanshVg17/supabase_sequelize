import {
  AllowNull,
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { MigrationExampleAttributes } from "./types/MigrationExample.type";
import { DataTypes } from "sequelize";

@Table({
  tableName: "users",
  timestamps: true,
  paranoid: true,
})
class MigrationExample extends Model<MigrationExampleAttributes> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column(DataTypes.INTEGER)
  declare id: number;

  @AllowNull(false)
  @Column(DataTypes.STRING)
  declare name: string;
}

export default MigrationExample;
