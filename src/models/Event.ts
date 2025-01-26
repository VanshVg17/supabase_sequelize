import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import Profile from "./Profile";

@Table
class Event extends Model {
  @Column
  event_name!: string;

  @Column
  event_date!: Date;

  @ForeignKey(() => Profile)
  @Column
  profile_id!: number;

  @BelongsTo(() => Profile)
  profile!: Profile;
}

export default Event;
