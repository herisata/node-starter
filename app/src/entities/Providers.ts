import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('providers')
export class Providers {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'provider', nullable: true, length: 191 })
  provider: string | null;

  @Column('varchar', { name: 'uid', nullable: true, length: 191 })
  uid: string | null;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name: string | null;

  @Column('mediumtext', { name: 'token', nullable: true })
  token: string | null;

  @Column('mediumtext', { name: 'secret', nullable: true })
  secret: string | null;

  @Column('int', { name: 'user_id', nullable: true })
  userId: number | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
