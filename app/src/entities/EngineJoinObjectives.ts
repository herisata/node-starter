import { Column, Entity } from 'typeorm';

// @Entity('engine_join_objectives')
export class EngineJoinObjectives {
  @Column('int', { name: 'engine_id', nullable: true })
  engineId: number | null;

  @Column('int', { name: 'objective_id', nullable: true })
  objectiveId: number | null;
}
