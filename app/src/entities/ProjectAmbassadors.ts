import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_project_ambassadors_on_agency_id', ['agencyId'], {})
@Index('index_project_ambassadors_on_admin_user_id', ['adminUserId'], {})
@Entity('project_ambassadors')
export class ProjectAmbassadors {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('int', { name: 'agency_id', nullable: true })
  agencyId: number | null;

  @Column('varchar', { name: 'aasm_state', nullable: true, length: 191 })
  aasmState: string | null;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name: string | null;

  @Column('mediumtext', { name: 'description', nullable: true })
  description: string | null;

  @Column('int', { name: 'admin_user_id', nullable: true })
  adminUserId: number | null;

  @Column('varchar', { name: 'client_name', nullable: true, length: 191 })
  clientName: string | null;

  @Column('tinyint', { name: 'tender', nullable: true, width: 1 })
  tender: boolean | null;

  @Column('varchar', { name: 'budget', nullable: true, length: 191 })
  budget: string | null;

  @Column('tinyint', { name: 'is_b2b', nullable: true, width: 1 })
  isB2b: boolean | null;

  @Column('varchar', {
    name: 'communication_duration',
    nullable: true,
    length: 191,
  })
  communicationDuration: string | null;

  @Column('varchar', {
    name: 'communication_scale',
    nullable: true,
    length: 191,
  })
  communicationScale: string | null;

  @Column('int', { name: 'women_ratio', nullable: true })
  womenRatio: number | null;

  @Column('mediumtext', { name: 'priority_comment', nullable: true })
  priorityComment: string | null;

  @Column('varchar', { name: 'other_service', nullable: true, length: 191 })
  otherService: string | null;

  @Column('varchar', { name: 'other_objective', nullable: true, length: 191 })
  otherObjective: string | null;

  @Column('varchar', { name: 'client_activity', nullable: true, length: 191 })
  clientActivity: string | null;

  @Column('varchar', { name: 'price_category_id', nullable: true, length: 191 })
  priceCategoryId: string | null;

  @Column('mediumtext', { name: 'celebrity_profile', nullable: true })
  celebrityProfile: string | null;

  @Column('varchar', { name: 'duration', nullable: true, length: 191 })
  duration: string | null;

  @Column('varchar', { name: 'duration_comment', nullable: true, length: 191 })
  durationComment: string | null;

  @Column('varchar', { name: 'start_at', nullable: true, length: 191 })
  startAt: string | null;

  @Column('mediumtext', { name: 'image_rights', nullable: true })
  imageRights: string | null;

  @Column('varchar', { name: 'budget_comment', nullable: true, length: 191 })
  budgetComment: string | null;

  @Column('varchar', { name: 'budget_media', nullable: true, length: 191 })
  budgetMedia: string | null;

  @Column('int', { name: 'studiowork_presence_duration', nullable: true })
  studioworkPresenceDuration: number | null;

  @Column('varchar', {
    name: 'studiowork_comment',
    nullable: true,
    length: 191,
  })
  studioworkComment: string | null;

  @Column('varchar', {
    name: 'social_media_post_number',
    nullable: true,
    length: 191,
  })
  socialMediaPostNumber: string | null;

  @Column('varchar', {
    name: 'social_media_post_comment',
    nullable: true,
    length: 191,
  })
  socialMediaPostComment: string | null;

  @Column('varchar', { name: 'sf_id', nullable: true, length: 191 })
  sfId: string | null;

  @Column('mediumtext', { name: 'age_scale_comment', nullable: true })
  ageScaleComment: string | null;
}
