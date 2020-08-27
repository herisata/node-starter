import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bandc_movies')
export class BandcMovies {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'label', nullable: true, length: 191 })
  label: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('varchar', { name: 'format_mp4', nullable: true, length: 191 })
  formatMp4: string | null;

  @Column('varchar', { name: 'format_webm', nullable: true, length: 191 })
  formatWebm: string | null;
}
