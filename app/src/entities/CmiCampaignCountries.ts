import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_cmi_campaign_countries_on_cmi_campaign_id', ['cmiCampaignId'], {})
@Entity('cmi_campaign_countries')
export class CmiCampaignCountries {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'cmi_campaign_id', nullable: true })
  cmiCampaignId: number | null;

  @Column('varchar', { name: 'localisable_type', nullable: true, length: 191 })
  localisableType: string | null;

  @Column('int', { name: 'localisable_id', nullable: true })
  localisableId: number | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
