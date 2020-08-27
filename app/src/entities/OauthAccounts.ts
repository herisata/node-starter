import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_oauth_accounts_on_uid_and_provider', ['uid', 'provider'], {
  unique: true,
})
@Entity('oauth_accounts')
export class OauthAccounts {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id', nullable: true })
  userId: number | null;

  @Column('varchar', { name: 'email', nullable: true, length: 191 })
  email: string | null;

  @Column('varchar', { name: 'provider', nullable: true, length: 191 })
  provider: string | null;

  @Column('varchar', { name: 'uid', nullable: true, length: 191 })
  uid: string | null;

  @Column('varchar', { name: 'profile_url', nullable: true, length: 191 })
  profileUrl: string | null;

  @Column('mediumtext', { name: 'token', nullable: true })
  token: string | null;

  @Column('datetime', { name: 'expires_at', nullable: true })
  expiresAt: Date | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;
}
