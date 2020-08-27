import { Column, Entity } from 'typeorm';

// @Entity('engine_join_age_scales')
export class EngineJoinAgeScales {
  @Column('int', { name: 'engine_id', nullable: true })
  engineId: number | null;

  @Column('int', { name: 'age_scale_id', nullable: true })
  ageScaleId: number | null;
}
