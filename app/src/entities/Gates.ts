import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_on_featurable_and_feature', ['featurableId', 'featurableType', 'featureName'], { unique: true })
@Index('index_on_feature_and_featurable', ['featureName', 'featurableId', 'featurableType'], { unique: true })
@Entity('gates')
export class Gates {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'feature_name', length: 191 })
  featureName: string;

  @Column('int', { name: 'featurable_id' })
  featurableId: number;

  @Column('varchar', { name: 'featurable_type', length: 191 })
  featurableType: string;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;
}
