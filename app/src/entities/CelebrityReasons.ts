import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_celebrity_reasons_on_celebrity_id', ['celebrityId'], {})
@Entity('celebrity_reasons')
export class CelebrityReasons {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('mediumtext', { name: 'content', nullable: true })
  content: string | null;

  @Column('int', { name: 'celebrity_id', nullable: true })
  celebrityId: number | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;
}
