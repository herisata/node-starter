import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_cmi_campaign_subtypes_on_cmi_campaign_type_id', ['cmiCampaignTypeId'], {})
@Entity('cmi_campaign_subtypes')
export class CmiCampaignSubtypes {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'cmi_campaign_type_id', nullable: true })
  cmiCampaignTypeId: number | null;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
