import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_reviews_on_celebrity_id', ['celebrityId'], { unique: true })
@Entity('reviews')
export class Reviews {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'celebrity_id', unique: true })
  celebrityId: number;

  @Column('mediumtext', { name: 'public_content', nullable: true })
  publicContent: string | null;

  @Column('mediumtext', { name: 'private_content', nullable: true })
  privateContent: string | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;
}
