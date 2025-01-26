import { Table, Column, Model, HasMany } from "sequelize-typescript";
import Event from "./Event";

@Table
class Profile extends Model {
  @Column
  user_id!: string;

  @Column
  display_name!: string;

  @Column
  bio!: string;

  @HasMany(() => Event)
  events!: Event[];
}

export default Profile;
