import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_price_categories_on_id', ['id'], {})
@Entity('price_categories')
export class PriceCategories {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name: string | null;

  @Column('varchar', { name: 'deal1_name', nullable: true, length: 191 })
  deal1Name: string | null;

  @Column('mediumtext', { name: 'deal1_description', nullable: true })
  deal1Description: string | null;

  @Column('varchar', { name: 'deal1_price_min', nullable: true, length: 191 })
  deal1PriceMin: string | null;

  @Column('varchar', { name: 'deal1_price_max', nullable: true, length: 191 })
  deal1PriceMax: string | null;

  @Column('varchar', { name: 'deal2_name', nullable: true, length: 191 })
  deal2Name: string | null;

  @Column('mediumtext', { name: 'deal2_description', nullable: true })
  deal2Description: string | null;

  @Column('varchar', { name: 'deal2_price_min', nullable: true, length: 191 })
  deal2PriceMin: string | null;

  @Column('varchar', { name: 'deal2_price_max', nullable: true, length: 191 })
  deal2PriceMax: string | null;

  @Column('varchar', { name: 'deal3_name', nullable: true, length: 191 })
  deal3Name: string | null;

  @Column('mediumtext', { name: 'deal3_description', nullable: true })
  deal3Description: string | null;

  @Column('varchar', { name: 'deal3_price_min', nullable: true, length: 191 })
  deal3PriceMin: string | null;

  @Column('varchar', { name: 'deal3_price_max', nullable: true, length: 191 })
  deal3PriceMax: string | null;

  @Column('varchar', { name: 'intervention', nullable: true, length: 191 })
  intervention: string | null;

  @Column('mediumtext', { name: 'sponsoring', nullable: true })
  sponsoring: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('varchar', { name: 'name_fr', nullable: true, length: 191 })
  nameFr: string | null;

  @Column('varchar', { name: 'deal1_name_fr', nullable: true, length: 191 })
  deal1NameFr: string | null;

  @Column('mediumtext', { name: 'deal1_description_fr', nullable: true })
  deal1DescriptionFr: string | null;

  @Column('varchar', { name: 'deal2_name_fr', nullable: true, length: 191 })
  deal2NameFr: string | null;

  @Column('mediumtext', { name: 'deal2_description_fr', nullable: true })
  deal2DescriptionFr: string | null;

  @Column('varchar', { name: 'deal3_name_fr', nullable: true, length: 191 })
  deal3NameFr: string | null;

  @Column('mediumtext', { name: 'deal3_description_fr', nullable: true })
  deal3DescriptionFr: string | null;

  @Column('varchar', { name: 'intervention_fr', nullable: true, length: 191 })
  interventionFr: string | null;

  @Column('mediumtext', { name: 'sponsoring_fr', nullable: true })
  sponsoringFr: string | null;

  @Column('varchar', {
    name: 'deal1_price_min_fr',
    nullable: true,
    length: 191,
  })
  deal1PriceMinFr: string | null;

  @Column('varchar', {
    name: 'deal1_price_max_fr',
    nullable: true,
    length: 191,
  })
  deal1PriceMaxFr: string | null;

  @Column('varchar', {
    name: 'deal2_price_min_fr',
    nullable: true,
    length: 191,
  })
  deal2PriceMinFr: string | null;

  @Column('varchar', {
    name: 'deal2_price_max_fr',
    nullable: true,
    length: 191,
  })
  deal2PriceMaxFr: string | null;

  @Column('varchar', {
    name: 'deal3_price_min_fr',
    nullable: true,
    length: 191,
  })
  deal3PriceMinFr: string | null;

  @Column('varchar', {
    name: 'deal3_price_max_fr',
    nullable: true,
    length: 191,
  })
  deal3PriceMaxFr: string | null;

  @Column('varchar', { name: 'label', nullable: true, length: 191 })
  label: string | null;
}
