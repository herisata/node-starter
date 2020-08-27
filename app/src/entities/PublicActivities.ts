import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_public_activities_on_trackable_id_and_trackable_type', ['trackableId', 'trackableType'], {})
@Index('index_public_activities_on_owner_id_and_owner_type', ['ownerId', 'ownerType'], {})
@Index('index_public_activities_on_recipient_id_and_recipient_type', ['recipientId', 'recipientType'], {})
@Entity('public_activities')
export class PublicActivities {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'trackable_id', nullable: true })
  trackableId: number | null;

  @Column('varchar', { name: 'trackable_type', nullable: true, length: 191 })
  trackableType: string | null;

  @Column('int', { name: 'owner_id', nullable: true })
  ownerId: number | null;

  @Column('varchar', { name: 'owner_type', nullable: true, length: 191 })
  ownerType: string | null;

  @Column('varchar', { name: 'key', nullable: true, length: 191 })
  key: string | null;

  @Column('mediumtext', { name: 'parameters', nullable: true })
  parameters: string | null;

  @Column('int', { name: 'recipient_id', nullable: true })
  recipientId: number | null;

  @Column('varchar', { name: 'recipient_type', nullable: true, length: 191 })
  recipientType: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
