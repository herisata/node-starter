import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('excerpt_interventions')
export class ExcerptInterventions {
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
