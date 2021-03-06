import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_project_uk_speakers_on_agency_id', ['agencyId'], {})
@Entity('project_uk_speakers')
export class ProjectUkSpeakers {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'agency_id', nullable: true })
  agencyId: number | null;

  @Column('int', { name: 'admin_user_id', nullable: true })
  adminUserId: number | null;

  @Column('varchar', { name: 'aasm_state', nullable: true, length: 191 })
  aasmState: string | null;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name: string | null;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @Column('text', { name: 'theme', nullable: true })
  theme: string | null;

  @Column('text', { name: 'target', nullable: true })
  target: string | null;

  @Column('varchar', { name: 'room_name', nullable: true, length: 191 })
  roomName: string | null;

  @Column('varchar', { name: 'address', nullable: true, length: 191 })
  address: string | null;

  @Column('varchar', { name: 'city', nullable: true, length: 191 })
  city: string | null;

  @Column('varchar', { name: 'zip_code', nullable: true, length: 191 })
  zipCode: string | null;

  @Column('varchar', { name: 'country', nullable: true, length: 191 })
  country: string | null;

  @Column('text', { name: 'date_comment', nullable: true })
  dateComment: string | null;

  @Column('text', { name: 'priority_comment', nullable: true })
  priorityComment: string | null;

  @Column('varchar', { name: 'other_objective', nullable: true, length: 191 })
  otherObjective: string | null;

  @Column('varchar', { name: 'sf_id', nullable: true, length: 191 })
  sfId: string | null;

  @Column('varchar', { name: 'client_name', nullable: true, length: 191 })
  clientName: string | null;

  @Column('tinyint', { name: 'tender', nullable: true, width: 1 })
  tender: boolean | null;

  @Column('varchar', { name: 'budget', nullable: true, length: 191 })
  budget: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
