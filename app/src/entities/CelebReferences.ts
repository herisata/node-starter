import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('celeb_references')
export class CelebReferences {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'celebrity_id', nullable: true })
  celebrityId: number | null;

  @Column('mediumtext', { name: 'title', nullable: true })
  title: string | null;

  @Column('mediumtext', { name: 'content', nullable: true })
  content: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
