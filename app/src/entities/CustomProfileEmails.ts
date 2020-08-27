import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_on_owner_and_public_profile', ['ownerId', 'ownerType', 'publicProfileId'], { unique: true })
@Entity('custom_profile_emails')
export class CustomProfileEmails {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('bigint', { name: 'public_profile_id' })
  publicProfileId: string;

  @Column('varchar', { name: 'owner_type', length: 255 })
  ownerType: string;

  @Column('bigint', { name: 'owner_id' })
  ownerId: string;

  @Column('varchar', { name: 'email', length: 255 })
  email: string;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;
}
