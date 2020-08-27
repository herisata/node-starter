import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_celebrity_thematics_on_celebrity_id_and_theme_id', ['celebrityId', 'themeId'], { unique: true })
@Entity('celebrity_thematics')
export class CelebrityThematics {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'celebrity_id' })
  celebrityId: number;

  @Column('int', { name: 'theme_id' })
  themeId: number;

  @Column('tinyint', { name: 'rating', nullable: true })
  rating: number | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;
}
