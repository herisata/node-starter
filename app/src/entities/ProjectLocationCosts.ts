import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_project_location_costs_on_project_location_id', ['projectLocationId'], {})
@Entity('project_location_costs')
export class ProjectLocationCosts {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'project_location_id', nullable: true })
  projectLocationId: number | null;

  @Column('varchar', { name: 'label', nullable: true, length: 191 })
  label: string | null;
}
