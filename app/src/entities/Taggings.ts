import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_taggings_on_profile_id_and_tag_id', ['profileId', 'tagId'], {
  unique: true,
})
@Entity('taggings')
export class Taggings {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('int', { name: 'profile_id' })
  profileId: number;

  @Column('int', { name: 'tag_id' })
  tagId: number;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;
}
