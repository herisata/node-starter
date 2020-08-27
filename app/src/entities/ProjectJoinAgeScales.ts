import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('project_join_age_scales')
export class ProjectJoinAgeScales {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;

  @Column('int', { name: 'projectable_id', nullable: true })
  projectableId: number | null;

  @Column('varchar', { name: 'projectable_type', nullable: true, length: 191 })
  projectableType: string | null;

  @Column('int', { name: 'project_age_scale_id', nullable: true })
  projectAgeScaleId: number | null;

  @Column('tinyint', { name: 'male', nullable: true, width: 1 })
  male: boolean | null;

  @Column('tinyint', { name: 'female', nullable: true, width: 1 })
  female: boolean | null;
}
