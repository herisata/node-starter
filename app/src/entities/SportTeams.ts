import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_sport_teams_on_celebrity_id', ['celebrityId'], {})
@Index('index_sport_teams_on_id', ['id'], {})
@Entity('sport_teams')
export class SportTeams {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'celebrity_id', nullable: true })
  celebrityId: number | null;

  @Column('varchar', { name: 'value', nullable: true, length: 191 })
  value: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('int', { name: 'delta', nullable: true })
  delta: number | null;

  @Column('varchar', { name: 'city', nullable: true, length: 191 })
  city: string | null;

  @Column('varchar', { name: 'country', nullable: true, length: 191 })
  country: string | null;

  @Column('int', { name: 'zip', nullable: true })
  zip: number | null;

  @Column('int', { name: 'position', nullable: true })
  position: number | null;
}
