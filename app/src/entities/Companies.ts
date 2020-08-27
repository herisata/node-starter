import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('companies')
export class Companies {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name: string | null;

  @Column('varchar', { name: 'agency_category', nullable: true, length: 191 })
  agencyCategory: string | null;

  @Column('varchar', { name: 'corporate_name', nullable: true, length: 191 })
  corporateName: string | null;

  @Column('varchar', {
    name: 'intracommunity_vat_number',
    nullable: true,
    length: 191,
  })
  intracommunityVatNumber: string | null;

  @Column('varchar', {
    name: 'registration_number',
    nullable: true,
    length: 191,
  })
  registrationNumber: string | null;

  @Column('varchar', {
    name: 'legal_representative',
    nullable: true,
    length: 191,
  })
  legalRepresentative: string | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;
}
