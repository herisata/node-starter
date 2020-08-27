import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_on_contact_and_profile', ['contactId', 'publicProfileId'], {
  unique: true,
})
@Index('index_favorites_on_public_profile_id', ['publicProfileId'], {})
@Entity('favorites')
export class Favorites {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('int', { name: 'contact_id' })
  contactId: number;

  @Column('int', { name: 'public_profile_id' })
  publicProfileId: number;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;
}
