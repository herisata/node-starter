import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_admin_users_on_user_id', ['userId'], { unique: true })
@Entity('admin_users')
export class AdminUsers {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('varchar', { name: 'first_name', nullable: true, length: 191 })
  firstName: string | null;

  @Column('varchar', { name: 'last_name', nullable: true, length: 191 })
  lastName: string | null;

  @Column('varchar', { name: 'job', nullable: true, length: 191 })
  job: string | null;

  @Column('varchar', { name: 'tel', nullable: true, length: 191 })
  tel: string | null;

  @Column('int', { name: 'user_id', unique: true })
  userId: number;

  @Column('tinyint', {
    name: 'manager',
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  manager: boolean | null;

  @Column('varchar', { name: 'sf_id', nullable: true, length: 191 })
  sfId: string | null;

  @Column('varchar', { name: 'photo', nullable: true, length: 191 })
  photo: string | null;
}
