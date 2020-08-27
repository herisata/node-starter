import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('form_contacts')
export class FormContacts {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;

  @Column('varchar', { name: 'email', nullable: true, length: 191 })
  email: string | null;

  @Column('varchar', { name: 'first_name', nullable: true, length: 191 })
  firstName: string | null;

  @Column('varchar', { name: 'last_name', nullable: true, length: 191 })
  lastName: string | null;

  @Column('mediumtext', { name: 'message', nullable: true })
  message: string | null;

  @Column('varchar', { name: 'company_name', nullable: true, length: 191 })
  companyName: string | null;

  @Column('mediumtext', { name: 'position_title', nullable: true })
  positionTitle: string | null;

  @Column('varchar', { name: 'phone_number', nullable: true, length: 191 })
  phoneNumber: string | null;

  @Column('mediumtext', { name: 'referer', nullable: true })
  referer: string | null;

  @Column('varchar', { name: 'sf_id', nullable: true, length: 191 })
  sfId: string | null;

  @Column('varchar', { name: 'locale', nullable: true, length: 191 })
  locale: string | null;

  @Column('varchar', { name: 'label', nullable: true, length: 191 })
  label: string | null;

  @Column('mediumtext', { name: 'project', nullable: true })
  project: string | null;

  @Column('date', { name: 'available_date', nullable: true })
  availableDate: string | null;

  @Column('varchar', { name: 'available_hours', nullable: true, length: 191 })
  availableHours: string | null;
}
