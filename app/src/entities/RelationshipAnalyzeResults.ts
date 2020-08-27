import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RelationshipAnalyzes } from './RelationshipAnalyzes';

@Index('index_relationship_analyze_results_on_relationship_analyze_id', ['relationshipAnalyzeId'], {})
@Index('index_relationship_analyze_results_on_celebrity_id', ['celebrityId'], {})
@Entity('relationship_analyze_results')
export class RelationshipAnalyzeResults {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('int', { name: 'relationship_analyze_id', nullable: true })
  relationshipAnalyzeId: number | null;

  @Column('int', { name: 'celebrity_id', nullable: true })
  celebrityId: number | null;

  @Column('bigint', { name: 'tw_nb', nullable: true })
  twNb: string | null;

  @Column('float', { name: 'tw_ratio', nullable: true, precision: 12 })
  twRatio: number | null;

  @Column('bigint', { name: 'fb_nb', nullable: true })
  fbNb: string | null;

  @Column('float', { name: 'fb_ratio', nullable: true, precision: 12 })
  fbRatio: number | null;

  @ManyToOne(() => RelationshipAnalyzes, (relationshipAnalyzes) => relationshipAnalyzes.relationshipAnalyzeResults, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'relationship_analyze_id', referencedColumnName: 'id' }])
  relationshipAnalyze: RelationshipAnalyzes;
}
