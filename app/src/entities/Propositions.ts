import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_propositions_on_project_id_and_public_profile_id', ['projectId', 'publicProfileId'], { unique: true })
@Index('index_propositions_on_state', ['state'], {})
@Entity('propositions')
export class Propositions {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'project_id' })
  projectId: number;

  @Column('int', { name: 'public_profile_id' })
  publicProfileId: number;

  @Column('varchar', {
    name: 'state',
    length: 128,
    default: () => "'initialized'",
  })
  state: string;

  @Column('int', { name: 'status_id', nullable: true })
  statusId: number | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;

  @Column('tinyint', { name: 'answer', nullable: true, width: 1 })
  answer: boolean | null;

  @Column('datetime', { name: 'answered_at', nullable: true })
  answeredAt: Date | null;

  @Column('int', { name: 'brief_id', nullable: true })
  briefId: number | null;

  @Column('tinyint', { name: 'suggested', width: 1, default: () => "'0'" })
  suggested: boolean;
}
