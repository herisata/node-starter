import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_feature_groups_on_name', ['name'], { unique: true })
@Entity('feature_groups')
export class FeatureGroups {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', unique: true, length: 191 })
  name: string;

  @Column('text', { name: 'application' })
  application: string;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @Column('tinyint', { name: 'active', width: 1, default: () => "'0'" })
  active: boolean;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;
}
