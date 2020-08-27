import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('influencer_registration_tokens')
export class InfluencerRegistrationTokens {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id', nullable: true })
  userId: number | null;

  @Column('int', { name: 'public_profile_id' })
  publicProfileId: number;

  @Column('varchar', { name: 'token', length: 191 })
  token: string;

  @Column('datetime', { name: 'registered_at', nullable: true })
  registeredAt: Date | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;
}
