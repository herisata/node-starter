import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_photos_on_celebrity_id', ['celebrityId'], {})
@Index('index_photos_on_id', ['id'], {})
@Entity('photos')
export class Photos {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'celebrity_id', nullable: true })
  celebrityId: number | null;

  @Column('mediumtext', { name: 'image', nullable: true })
  image: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('varchar', { name: 'title', nullable: true, length: 191 })
  title: string | null;

  @Column('int', { name: 'width', nullable: true })
  width: number | null;

  @Column('int', { name: 'height', nullable: true })
  height: number | null;

  @Column('varchar', { name: 'orientation', nullable: true, length: 191 })
  orientation: string | null;

  @Column('int', { name: 'position', nullable: true, default: () => "'0'" })
  position: number | null;
}
