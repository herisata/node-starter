import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('created_at', ['createdAt'], {})
@Entity('suggested_account_logs')
export class SuggestedAccountLogs {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'socialable_id' })
  socialableId: number;

  @Column('varchar', { name: 'socialable_type', length: 191 })
  socialableType: string;

  @Column('tinyint', { name: 'suggestions_count' })
  suggestionsCount: number;

  @Column('tinyint', { name: 'suggestions_used' })
  suggestionsUsed: number;

  @Column('text', { name: 'data', nullable: true })
  data: string | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;
}
