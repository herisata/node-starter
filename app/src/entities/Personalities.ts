import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_personalities_on_celebrity_id', ['celebrityId'], {})
@Index('index_personalities_on_activity_id', ['activityId'], {})
@Entity('personalities')
export class Personalities {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'first_name', nullable: true, length: 191 })
  firstName: string | null;

  @Column('varchar', { name: 'last_name', nullable: true, length: 191 })
  lastName: string | null;

  @Column('varchar', { name: 'gender', nullable: true, length: 191 })
  gender: string | null;

  @Column('int', { name: 'activity_id', nullable: true })
  activityId: number | null;

  @Column('int', { name: 'celebrity_id', nullable: true })
  celebrityId: number | null;

  @Column('varchar', { name: 'pseudo', nullable: true, length: 191 })
  pseudo: string | null;
}
