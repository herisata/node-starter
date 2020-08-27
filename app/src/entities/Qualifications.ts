import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('qualifications')
export class Qualifications {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', {
    name: 'state',
    length: 191,
    default: () => "'initialized'",
  })
  state: string;

  @Column('int', { name: 'admin_user_id', nullable: true })
  adminUserId: number | null;

  @Column('int', { name: 'contact_id', nullable: true })
  contactId: number | null;

  @Column('varchar', { name: 'company_name', nullable: true, length: 191 })
  companyName: string | null;

  @Column('text', { name: 'details', nullable: true })
  details: string | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;
}
