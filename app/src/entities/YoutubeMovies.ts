import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_youtube_movies_on_celebrity_id', ['celebrityId'], {})
@Entity('youtube_movies')
export class YoutubeMovies {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'celebrity_id', nullable: true })
  celebrityId: number | null;

  @Column('mediumtext', { name: 'youtube_id', nullable: true })
  youtubeId: string | null;

  @Column('mediumtext', { name: 'title', nullable: true })
  title: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
