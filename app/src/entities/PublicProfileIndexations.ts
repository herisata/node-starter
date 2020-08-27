import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_indexations_on_profile_id_and_engine', ['publicProfileId', 'engineLabel'], { unique: true })
@Index('index_indexations_on_profile_id_and_approved', ['publicProfileId', 'approved'], {})
@Index('index_indexations_on_approved', ['approved'], {})
@Entity('public_profile_indexations')
export class PublicProfileIndexations {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'public_profile_id' })
  publicProfileId: number;

  @Column('varchar', { name: 'engine_label', length: 191 })
  engineLabel: string;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('tinyint', { name: 'completed', width: 1, default: () => "'0'" })
  completed: boolean;

  @Column('tinyint', { name: 'approved', width: 1, default: () => "'1'" })
  approved: boolean;
}
