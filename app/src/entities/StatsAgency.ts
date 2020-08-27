import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('stats_agency')
export class StatsAgency {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('int', { name: 'nb_agency', nullable: true })
  nbAgency: number | null;

  @Column('int', { name: 'nb_valid_agency', nullable: true })
  nbValidAgency: number | null;

  @Column('int', { name: 'nb_logged_agency', nullable: true })
  nbLoggedAgency: number | null;
}
