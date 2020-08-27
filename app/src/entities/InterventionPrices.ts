import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('intervention_prices')
export class InterventionPrices {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name_fr', nullable: true, length: 191 })
  nameFr: string | null;

  @Column('varchar', { name: 'name_en', nullable: true, length: 191 })
  nameEn: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('int', { name: 'animator_price', nullable: true })
  animatorPrice: number | null;
}
