import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_project_animators_on_agency_id', ['agencyId'], {})
@Index('index_project_animators_on_admin_user_id', ['adminUserId'], {})
@Index('index_project_animators_on_animation_type_id', ['animationTypeId'], {})
@Index('index_project_animators_on_location_id', ['locationId'], {})
@Index('index_project_animators_on_language_id', ['languageId'], {})
@Entity('project_animators')
export class ProjectAnimators {
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

  @Column('mediumtext', { name: 'description', nullable: true })
  description: string | null;

  @Column('mediumtext', { name: 'target', nullable: true })
  target: string | null;

  @Column('int', { name: 'animation_type_id', nullable: true })
  animationTypeId: number | null;

  @Column('int', { name: 'location_id', nullable: true })
  locationId: number | null;

  @Column('int', { name: 'language_id', nullable: true })
  languageId: number | null;

  @Column('int', { name: 'contributor_number', nullable: true })
  contributorNumber: number | null;

  @Column('int', { name: 'round_table_number', nullable: true })
  roundTableNumber: number | null;

  @Column('int', { name: 'preparation_meetings_number', nullable: true })
  preparationMeetingsNumber: number | null;

  @Column('int', { name: 'rehearsal_duration', nullable: true })
  rehearsalDuration: number | null;

  @Column('int', { name: 'presence_duration', nullable: true })
  presenceDuration: number | null;

  @Column('tinyint', { name: 'public', nullable: true, width: 1 })
  public: boolean | null;

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

  @Column('mediumtext', { name: 'date_comment', nullable: true })
  dateComment: string | null;

  @Column('mediumtext', { name: 'priority_comment', nullable: true })
  priorityComment: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('varchar', { name: 'sf_id', nullable: true, length: 191 })
  sfId: string | null;

  @Column('varchar', { name: 'client_name', nullable: true, length: 191 })
  clientName: string | null;

  @Column('tinyint', { name: 'tender', nullable: true, width: 1 })
  tender: boolean | null;
}
