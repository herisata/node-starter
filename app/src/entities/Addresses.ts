import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('addresses')
export class Addresses {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'street', nullable: true, length: 191 })
  street: string | null;

  @Column('varchar', { name: 'number', nullable: true, length: 191 })
  number: string | null;

  @Column('varchar', { name: 'zip_code', nullable: true, length: 191 })
  zipCode: string | null;

  @Column('mediumtext', { name: 'city', nullable: true })
  city: string | null;

  @Column('varchar', { name: 'country_code', nullable: true, length: 2 })
  countryCode: string | null;

  @Column('text', { name: 'gmaps', nullable: true })
  gmaps: string | null;
}
