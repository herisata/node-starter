import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('notation_offline_projects')
export class NotationOfflineProjects {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'celebrity_id', nullable: true })
  celebrityId: number | null;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name: string | null;

  @Column('varchar', { name: 'client', nullable: true, length: 191 })
  client: string | null;

  @Column('date', { name: 'date', nullable: true })
  date: string | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;
}
