import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ScRoots } from './ScRoots';
import { ScRootGoals } from './ScRootGoals';

@Index('index_sc_root_goal_links_on_sc_root_id', ['scRootId'], {})
@Index('index_sc_root_goal_links_on_sc_root_goal_id', ['scRootGoalId'], {})
@Entity('sc_root_goal_links')
export class ScRootGoalLinks {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'sc_root_id', nullable: true })
  scRootId: number | null;

  @Column('int', { name: 'sc_root_goal_id', nullable: true })
  scRootGoalId: number | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => ScRoots, (scRoots) => scRoots.scRootGoalLinks, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'sc_root_id', referencedColumnName: 'id' }])
  scRoot: ScRoots;

  @ManyToOne(() => ScRootGoals, (scRootGoals) => scRootGoals.scRootGoalLinks, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'sc_root_goal_id', referencedColumnName: 'id' }])
  scRootGoal: ScRootGoals;
}
