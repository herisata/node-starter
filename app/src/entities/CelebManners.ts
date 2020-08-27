import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('celeb_manners')
export class CelebManners {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'celebrity_id', nullable: true })
  celebrityId: number | null;

  @Column('int', { name: 'celeb_methods_id', nullable: true })
  celebMethodsId: number | null;

  @Column('int', { name: 'value', nullable: true })
  value: number | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
