import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_cmi_personality_campaigns_on_personality_id', ['personalityId'], {})
@Index('index_cmi_personality_campaigns_on_cmi_campaign_id', ['cmiCampaignId'], {})
@Entity('cmi_personality_campaigns')
export class CmiPersonalityCampaigns {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'personality_id', nullable: true })
  personalityId: number | null;

  @Column('int', { name: 'cmi_campaign_id', nullable: true })
  cmiCampaignId: number | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
