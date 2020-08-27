import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_intervention_taggings_on_intervention_tag_id', ['interventionTagId'], {})
@Index('index_intervention_taggings_on_celebrity_id', ['celebrityId'], {})
@Entity('intervention_taggings')
export class InterventionTaggings {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'intervention_tag_id', nullable: true })
  interventionTagId: number | null;

  @Column('int', { name: 'celebrity_id', nullable: true })
  celebrityId: number | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
