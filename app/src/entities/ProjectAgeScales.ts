import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('project_age_scales')
export class ProjectAgeScales {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;

  @Column('varchar', { name: 'label', nullable: true, length: 191 })
  label: string | null;
}
