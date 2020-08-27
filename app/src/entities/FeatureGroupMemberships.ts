import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_feature_group_memberships_on_user_id_and_feature_group_id', ['userId', 'featureGroupId'], {
  unique: true,
})
@Index('index_feature_group_memberships_on_feature_group_id_and_user_id', ['featureGroupId', 'userId'], {
  unique: true,
})
@Entity('feature_group_memberships')
export class FeatureGroupMemberships {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('int', { name: 'feature_group_id' })
  featureGroupId: number;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;
}
