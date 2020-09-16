import { Column, Index } from 'typeorm';

@Index('index_similitudes_on_profile_id_and_similar_id', ['profileId', 'similarId'], { unique: true })
// @Entity('similitudes')
export class Similitudes {
  @Column('int', { name: 'profile_id' })
  profileId: number;

  @Column('int', { name: 'similar_id' })
  similarId: number;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;
}
