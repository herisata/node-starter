import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RelationshipAnalyzeResults } from './RelationshipAnalyzeResults';
import { CfmBrands } from './CfmBrands';

@Index('index_relationship_analyzes_on_user_id', ['userId'], {})
@Index('index_relationship_analyzes_on_brand_id', ['brandId'], {})
@Entity('relationship_analyzes')
export class RelationshipAnalyzes {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('int', { name: 'user_id', nullable: true })
  userId: number | null;

  @Column('int', { name: 'brand_id', nullable: true })
  brandId: number | null;

  @OneToMany(
    () => RelationshipAnalyzeResults,
    (relationshipAnalyzeResults) => relationshipAnalyzeResults.relationshipAnalyze,
  )
  relationshipAnalyzeResults: RelationshipAnalyzeResults[];

  @ManyToOne(() => CfmBrands, (cfmBrands) => cfmBrands.relationshipAnalyzes, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'brand_id', referencedColumnName: 'id' }])
  brand: CfmBrands;
}
