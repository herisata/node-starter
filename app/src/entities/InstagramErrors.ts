import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_instagram_errors_on_celebrity_id', ['celebrityId'], {})
@Entity('instagram_errors')
export class InstagramErrors {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'code', nullable: true })
  code: number | null;

  @Column('mediumtext', { name: 'error_message', nullable: true })
  errorMessage: string | null;

  @Column('varchar', { name: 'error_type', nullable: true, length: 191 })
  errorType: string | null;

  @Column('int', { name: 'celebrity_id', nullable: true })
  celebrityId: number | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
