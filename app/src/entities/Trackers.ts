import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_trackers_on_user_id', ['userId'], {})
@Entity('trackers')
export class Trackers {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('int', { name: 'user_id', nullable: true })
  userId: number | null;

  @Column('varchar', { name: 'label', nullable: true, length: 191 })
  label: string | null;

  @Column('mediumtext', { name: 'categories', nullable: true })
  categories: string | null;

  @Column('varchar', { name: 'page', nullable: true, length: 191 })
  page: string | null;

  @Column('varchar', { name: 'params', nullable: true, length: 191 })
  params: string | null;
}
