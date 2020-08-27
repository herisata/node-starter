import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ScRootGoalLinks } from './ScRootGoalLinks';

@Entity('sc_root_goals')
export class ScRootGoals {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name_fr', nullable: true, length: 191 })
  nameFr: string | null;

  @Column('varchar', { name: 'name_en', nullable: true, length: 191 })
  nameEn: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => ScRootGoalLinks, (scRootGoalLinks) => scRootGoalLinks.scRootGoal)
  scRootGoalLinks: ScRootGoalLinks[];
}
