import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('engine_join_missions')
export class EngineJoinMissions {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;

  @Column('int', { name: 'engine_id', nullable: true })
  engineId: number | null;

  @Column('int', { name: 'mission_id', nullable: true })
  missionId: number | null;
}
