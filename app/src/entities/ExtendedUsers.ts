import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_extended_users_on_user_id', ['userId'], {})
@Entity('extended_users')
export class ExtendedUsers {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id', nullable: true })
  userId: number | null;

  @Column('tinyint', { name: 'split_user', nullable: true, width: 1 })
  splitUser: boolean | null;

  @Column('int', { name: 'split_parent_id', nullable: true })
  splitParentId: number | null;

  @Column('tinyint', { name: 'mod_email', nullable: true, width: 1 })
  modEmail: boolean | null;

  @Column('varchar', {
    name: 'mod_email_original',
    nullable: true,
    length: 191,
  })
  modEmailOriginal: string | null;

  @Column('mediumtext', { name: 'description', nullable: true })
  description: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
