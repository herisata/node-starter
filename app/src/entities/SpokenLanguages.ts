import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_spoken_languages_on_code', ['code'], {})
@Entity('spoken_languages')
export class SpokenLanguages {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'code', nullable: true, length: 10 })
  code: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
