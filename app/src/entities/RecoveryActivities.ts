import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_recovery_activities_on_user_id', ['userId'], {})
@Entity('recovery_activities')
export class RecoveryActivities {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id', nullable: true })
  userId: number | null;

  @Column('mediumtext', { name: 'url', nullable: true })
  url: string | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;
}
