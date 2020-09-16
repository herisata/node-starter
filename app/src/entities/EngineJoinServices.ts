import { Column } from 'typeorm';

// @Entity('engine_join_services')
export class EngineJoinServices {
  @Column('int', { name: 'engine_id', nullable: true })
  engineId: number | null;

  @Column('int', { name: 'service_id', nullable: true })
  serviceId: number | null;
}
