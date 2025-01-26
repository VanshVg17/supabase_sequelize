import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
} from "sequelize-typescript";

@Table({ tableName: "bio", timestamps: true })
export default class Bio extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column({ type: DataType.STRING, allowNull: false })
  bio!: string;
}
