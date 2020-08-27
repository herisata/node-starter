import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_locations_on_uid', ['uid'], { unique: true })
@Index('index_locations_on_country_code_and_city', ['countryCode', 'city'], {
  unique: true,
})
@Entity('locations')
export class Locations {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('varchar', { name: 'uid', unique: true, length: 191 })
  uid: string;

  @Column('varchar', { name: 'country_code', length: 191 })
  countryCode: string;

  @Column('varchar', { name: 'city', nullable: true, length: 191 })
  city: string | null;
}
