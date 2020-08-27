import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_internal_client_auths_on_label', ['label'], {})
@Entity('internal_client_auths')
export class InternalClientAuths {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'label', nullable: true, length: 191 })
  label: string | null;

  @Column('varchar', { name: 'access_token', nullable: true, length: 191 })
  accessToken: string | null;

  @Column('varchar', { name: 'refresh_token', nullable: true, length: 191 })
  refreshToken: string | null;

  @Column('varchar', { name: 'uid', nullable: true, length: 191 })
  uid: string | null;

  @Column('varchar', { name: 'secret_token', nullable: true, length: 191 })
  secretToken: string | null;

  @Column('datetime', { name: 'expires_at', nullable: true })
  expiresAt: Date | null;

  @Column('varchar', { name: 'url', nullable: true, length: 191 })
  url: string | null;

  @Column('mediumtext', { name: 'data', nullable: true })
  data: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
