import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_celebrity_reason_propositions_on_celebrity_reason_id', ['celebrityReasonId'], {})
@Entity('celebrity_reason_propositions')
export class CelebrityReasonPropositions {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'celebrity_reason_id', nullable: true })
  celebrityReasonId: number | null;

  @Column('int', { name: 'reasonable_id', nullable: true })
  reasonableId: number | null;

  @Column('varchar', { name: 'reasonable_type', nullable: true, length: 191 })
  reasonableType: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
