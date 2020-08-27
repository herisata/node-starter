import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_project_language_costs_on_project_language_id', ['projectLanguageId'], {})
@Entity('project_language_costs')
export class ProjectLanguageCosts {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'project_language_id', nullable: true })
  projectLanguageId: number | null;

  @Column('varchar', { name: 'label', nullable: true, length: 191 })
  label: string | null;
}
