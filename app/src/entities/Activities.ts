import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_activities_on_label', ['label'], { unique: true })
@Entity('activities')
export class Activities {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'woman_intensity', nullable: true })
  womanIntensity: number | null;

  @Column('int', { name: 'man_intensity', nullable: true })
  manIntensity: number | null;

  @Column('varchar', { name: 'ancestry', nullable: true, length: 191 })
  ancestry: string | null;

  @Column('varchar', {
    name: 'label',
    nullable: true,
    unique: true,
    length: 191,
  })
  label: string | null;

  @Column('varchar', { name: 'ancestry_label', nullable: true, length: 191 })
  ancestryLabel: string | null;
}
