import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_teams_on_name', ['name'], { unique: true })
@Entity('teams')
export class Teams {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', unique: true, length: 191 })
  name: string;

  @Column('varchar', {
    name: 'new_member_role',
    length: 191,
    default: () => "'editor'",
  })
  newMemberRole: string;

  @Column('int', { name: 'feature_group_id', nullable: true })
  featureGroupId: number | null;

  @Column('int', { name: 'members_count', default: () => "'0'" })
  membersCount: number;

  @Column('int', { name: 'package_id', nullable: true })
  packageId: number | null;
}
