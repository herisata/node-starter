import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_cmi_campaigns_on_cmi_campaign_type_id', ['cmiCampaignTypeId'], {})
@Index('index_cmi_campaigns_on_cmi_campaign_subtype_id', ['cmiCampaignSubtypeId'], {})
@Entity('cmi_campaigns')
export class CmiCampaigns {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'campaignable_type', nullable: true, length: 191 })
  campaignableType: string | null;

  @Column('int', { name: 'campaignable_id', nullable: true })
  campaignableId: number | null;

  @Column('varchar', { name: 'details', nullable: true, length: 191 })
  details: string | null;

  @Column('int', { name: 'cmi_campaign_type_id', nullable: true })
  cmiCampaignTypeId: number | null;

  @Column('int', { name: 'cmi_campaign_subtype_id', nullable: true })
  cmiCampaignSubtypeId: number | null;

  @Column('varchar', { name: 'budget', nullable: true, length: 191 })
  budget: string | null;

  @Column('varchar', { name: 'celebrity_fee', nullable: true, length: 191 })
  celebrityFee: string | null;

  @Column('mediumtext', { name: 'roi', nullable: true })
  roi: string | null;

  @Column('date', { name: 'start_date', nullable: true })
  startDate: string | null;

  @Column('varchar', { name: 'period', nullable: true, length: 191 })
  period: string | null;

  @Column('varchar', {
    name: 'communication_agency',
    nullable: true,
    length: 191,
  })
  communicationAgency: string | null;

  @Column('varchar', { name: 'celebrity_agency', nullable: true, length: 191 })
  celebrityAgency: string | null;

  @Column('varchar', { name: 'targets', nullable: true, length: 191 })
  targets: string | null;

  @Column('varchar', { name: 'goals', nullable: true, length: 191 })
  goals: string | null;

  @Column('varchar', { name: 'blog_article_url', nullable: true, length: 191 })
  blogArticleUrl: string | null;

  @Column('tinyint', { name: 'displayed_in_search', nullable: true, width: 1 })
  displayedInSearch: boolean | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
