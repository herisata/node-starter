import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_project_join_target_incomes_on_project_target_income_id', ['projectTargetIncomeId'], {})
@Entity('project_join_target_incomes')
export class ProjectJoinTargetIncomes {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('int', { name: 'projectable_id', nullable: true })
  projectableId: number | null;

  @Column('varchar', { name: 'projectable_type', nullable: true, length: 191 })
  projectableType: string | null;

  @Column('int', { name: 'project_target_income_id', nullable: true })
  projectTargetIncomeId: number | null;
}
