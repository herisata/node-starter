import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_auth_tokens_on_token_and_expire_at', ['token', 'expireAt'], {})
@Index('index_auth_tokens_on_user_id', ['userId'], {})
@Entity('auth_tokens')
export class AuthTokens {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('int', { name: 'masquerade_id', nullable: true })
  masqueradeId: number | null;

  @Column('varchar', { name: 'token', length: 255 })
  token: string;

  @Column('varchar', { name: 'session_key', nullable: true, length: 255 })
  sessionKey: string | null;

  @Column('varchar', { name: 'created_at', length: 255 })
  createdAt: string;

  @Column('datetime', { name: 'expire_at' })
  expireAt: Date;
}
