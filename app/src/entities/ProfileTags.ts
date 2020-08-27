import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_profile_tags_on_tagger_id_and_tagger_type_and_value', ['taggerId', 'taggerType', 'value'], {
  unique: true,
})
@Entity('profile_tags')
export class ProfileTags {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('varchar', { name: 'tagger_type', length: 191 })
  taggerType: string;

  @Column('bigint', { name: 'tagger_id' })
  taggerId: string;

  @Column('varchar', { name: 'value', length: 191 })
  value: string;
}
