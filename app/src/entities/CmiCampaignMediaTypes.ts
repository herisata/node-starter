import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_cmi_campaign_media_types_on_media_type_id', ['mediaTypeId'], {})
@Index('index_cmi_campaign_media_types_on_cmi_campaign_id', ['cmiCampaignId'], {})
@Entity('cmi_campaign_media_types')
export class CmiCampaignMediaTypes {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'cmi_campaign_id', nullable: true })
  cmiCampaignId: number | null;

  @Column('int', { name: 'media_type_id', nullable: true })
  mediaTypeId: number | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
