import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('project_dates')
export class ProjectDates {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('datetime', { name: 'planned_at', nullable: true })
  plannedAt: Date | null;

  @Column('int', { name: 'grade', nullable: true })
  grade: number | null;

  @Column('varchar', { name: 'status', nullable: true, length: 191 })
  status: string | null;

  @Column('int', { name: 'plannable_id', nullable: true })
  plannableId: number | null;

  @Column('varchar', { name: 'plannable_type', nullable: true, length: 191 })
  plannableType: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('tinyint', {
    name: 'confirm',
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  confirm: boolean | null;

  @Column('varchar', { name: 'comment', nullable: true, length: 191 })
  comment: string | null;
}
