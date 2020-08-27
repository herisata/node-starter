import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_google_images_on_celebrity_id', ['celebrityId'], {})
@Entity('google_images')
export class GoogleImages {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'celebrity_id', nullable: true })
  celebrityId: number | null;

  @Column('mediumtext', { name: 'url', nullable: true })
  url: string | null;

  @Column('int', { name: 'width', nullable: true })
  width: number | null;

  @Column('int', { name: 'length', nullable: true })
  length: number | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('mediumtext', { name: 'thumb_url', nullable: true })
  thumbUrl: string | null;
}
