import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('social_account_tokens')
export class SocialAccountTokens {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'social_network_account_id' })
  socialNetworkAccountId: number;

  @Column('varchar', { name: 'associated_uid', nullable: true, length: 191 })
  associatedUid: string | null;

  @Column('text', { name: 'token', nullable: true })
  token: string | null;

  @Column('tinyint', { name: 'revoked', width: 1, default: () => "'0'" })
  revoked: boolean;

  @Column('datetime', { name: 'expires_at', nullable: true })
  expiresAt: Date | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'disconnected_at', nullable: true })
  disconnectedAt: Date | null;
}
