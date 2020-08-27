import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('area_countries')
export class AreaCountries {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'country_id', nullable: true })
  countryId: number | null;

  @Column('int', { name: 'area_id', nullable: true })
  areaId: number | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
