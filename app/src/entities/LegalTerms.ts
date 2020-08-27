import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('legal_terms')
export class LegalTerms {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'service', length: 191 })
  service: string;

  @Column('varchar', { name: 'text_type', length: 191 })
  textType: string;

  @Column('varchar', { name: 'user_role', length: 191 })
  userRole: string;

  @Column('varchar', { name: 'filename', length: 191 })
  filename: string;

  @Column('datetime', { name: 'started_at' })
  startedAt: Date;

  @Column('datetime', { name: 'ended_at', nullable: true })
  endedAt: Date | null;
}
