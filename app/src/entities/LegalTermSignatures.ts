import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_legal_term_signatures_on_user_id', ['userId'], {})
@Index('index_legal_term_signatures_on_legal_term_id', ['legalTermId'], {})
@Entity('legal_term_signatures')
export class LegalTermSignatures {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('int', { name: 'legal_term_id' })
  legalTermId: number;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;
}
