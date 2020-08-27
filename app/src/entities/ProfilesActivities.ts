import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_public_profile_activity', ['publicProfileId', 'activityId'], {
  unique: true,
})
@Entity('profiles_activities')
export class ProfilesActivities {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'activity_id' })
  activityId: number;

  @Column('int', { name: 'public_profile_id' })
  publicProfileId: number;
}
