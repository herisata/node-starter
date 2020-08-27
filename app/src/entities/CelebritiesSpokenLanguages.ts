import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('celebrities_spoken_languages')
export class CelebritiesSpokenLanguages {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'celebrity_id', nullable: true })
  celebrityId: number | null;

  @Column('int', { name: 'spoken_language_id', nullable: true })
  spokenLanguageId: number | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
