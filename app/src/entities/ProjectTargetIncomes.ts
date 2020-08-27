import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('project_target_incomes')
export class ProjectTargetIncomes {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('varchar', { name: 'label', nullable: true, length: 191 })
  label: string | null;
}
