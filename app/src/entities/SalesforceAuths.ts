import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('salesforce_auths')
export class SalesforceAuths {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('datetime', { name: 'issued_at', nullable: true })
  issuedAt: Date | null;

  @Column('varchar', { name: 'scope', nullable: true, length: 191 })
  scope: string | null;

  @Column('varchar', { name: 'instance_url', nullable: true, length: 191 })
  instanceUrl: string | null;

  @Column('varchar', { name: 'token_type', nullable: true, length: 191 })
  tokenType: string | null;

  @Column('varchar', { name: 'refresh_token', nullable: true, length: 191 })
  refreshToken: string | null;

  @Column('varchar', { name: 'signature', nullable: true, length: 191 })
  signature: string | null;

  @Column('varchar', { name: 'access_token', nullable: true, length: 191 })
  accessToken: string | null;

  @Column('mediumtext', { name: 'id_token', nullable: true })
  idToken: string | null;

  @Column('varchar', { name: 'id_url', nullable: true, length: 191 })
  idUrl: string | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;
}
