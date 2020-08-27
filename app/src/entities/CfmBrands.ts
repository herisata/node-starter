import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RelationshipAnalyzes } from './RelationshipAnalyzes';

@Entity('cfm_brands')
export class CfmBrands {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name: string | null;

  @Column('bigint', { name: 'twitter_id', nullable: true })
  twitterId: string | null;

  @Column('bigint', { name: 'facebook_id', nullable: true })
  facebookId: string | null;

  @Column('int', { name: 'followers_count', nullable: true })
  followersCount: number | null;

  @Column('int', { name: 'fans_count', nullable: true })
  fansCount: number | null;

  @OneToMany(() => RelationshipAnalyzes, (relationshipAnalyzes) => relationshipAnalyzes.brand)
  relationshipAnalyzes: RelationshipAnalyzes[];
}
