import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_profile_reports_on_contact_id', ['contactId'], {})
@Index('index_profile_reports_on_public_profile_id', ['publicProfileId'], {})
@Entity('profile_reports')
export class ProfileReports {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('int', { name: 'contact_id' })
  contactId: number;

  @Column('int', { name: 'public_profile_id' })
  publicProfileId: number;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;
}
