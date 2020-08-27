import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_notes_on_contact_id_and_public_profile_id', ['contactId', 'publicProfileId'], {})
@Index('index_notes_on_public_profile_id', ['publicProfileId'], {})
@Entity('notes')
export class Notes {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('int', { name: 'contact_id' })
  contactId: number;

  @Column('int', { name: 'public_profile_id' })
  publicProfileId: number;

  @Column('int', { name: 'team_id', nullable: true })
  teamId: number | null;

  @Column('text', { name: 'content' })
  content: string;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;
}
