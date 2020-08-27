import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_celebrity_preferences_on_celebrity_id', ['celebrityId'], {})
@Entity('celebrity_preferences')
export class CelebrityPreferences {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'celebrity_id' })
  celebrityId: number;

  @Column('text', { name: 'content' })
  content: string;
}
