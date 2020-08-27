import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_video_files_on_celebrity_id', ['celebrityId'], {})
@Index('index_video_files_on_id', ['id'], {})
@Entity('video_files')
export class VideoFiles {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'celebrity_id', nullable: true })
  celebrityId: number | null;

  @Column('varchar', { name: 'video', nullable: true, length: 191 })
  video: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
