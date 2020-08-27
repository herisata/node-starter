import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_project_sponsored_posts_on_agency_id', ['agencyId'], {})
@Index('index_project_sponsored_posts_on_admin_user_id', ['adminUserId'], {})
@Entity('project_sponsored_posts')
export class ProjectSponsoredPosts {
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

  @Column('varchar', { name: 'other_objective', nullable: true, length: 191 })
  otherObjective: string | null;

  @Column('mediumtext', { name: 'age_scale_comment', nullable: true })
  ageScaleComment: string | null;

  @Column('mediumtext', { name: 'priority_comment', nullable: true })
  priorityComment: string | null;

  @Column('varchar', { name: 'client_name', nullable: true, length: 191 })
  clientName: string | null;

  @Column('varchar', { name: 'budget', nullable: true, length: 191 })
  budget: string | null;

  @Column('varchar', { name: 'budget_comment', nullable: true, length: 191 })
  budgetComment: string | null;

  @Column('date', { name: 'start_at', nullable: true })
  startAt: string | null;

  @Column('date', { name: 'end_at', nullable: true })
  endAt: string | null;

  @Column('varchar', { name: 'date_comment', nullable: true, length: 191 })
  dateComment: string | null;

  @Column('mediumtext', { name: 'social_networks', nullable: true })
  socialNetworks: string | null;

  @Column('mediumtext', { name: 'influencer_categories', nullable: true })
  influencerCategories: string | null;

  @Column('mediumtext', { name: 'campaign_themes', nullable: true })
  campaignThemes: string | null;

  @Column('tinyint', { name: 'campaign_experience', nullable: true, width: 1 })
  campaignExperience: boolean | null;

  @Column('tinyint', { name: 'tender', nullable: true, width: 1 })
  tender: boolean | null;

  @Column('mediumtext', { name: 'post_content_types', nullable: true })
  postContentTypes: string | null;

  @Column('mediumtext', { name: 'post_description', nullable: true })
  postDescription: string | null;

  @Column('mediumtext', { name: 'post_example', nullable: true })
  postExample: string | null;

  @Column('mediumtext', { name: 'post_hashtags', nullable: true })
  postHashtags: string | null;

  @Column('mediumtext', { name: 'post_mentions', nullable: true })
  postMentions: string | null;

  @Column('mediumtext', { name: 'post_urls', nullable: true })
  postUrls: string | null;

  @Column('tinyint', {
    name: 'relay_celebrity_posts',
    nullable: true,
    width: 1,
  })
  relayCelebrityPosts: boolean | null;

  @Column('int', { name: 'post_amplify_durations', nullable: true })
  postAmplifyDurations: number | null;

  @Column('int', { name: 'relay_amplify_durations', nullable: true })
  relayAmplifyDurations: number | null;

  @Column('varchar', { name: 'inspiration_creas', nullable: true, length: 191 })
  inspirationCreas: string | null;

  @Column('varchar', { name: 'mandatory_creas', nullable: true, length: 191 })
  mandatoryCreas: string | null;

  @Column('int', { name: 'campaign_purpose', nullable: true })
  campaignPurpose: number | null;
}
