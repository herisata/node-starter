import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('stats_engine')
export class StatsEngine {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('varchar', { name: 'engine_type', nullable: true, length: 191 })
  engineType: string | null;

  @Column('int', { name: 'nb_engine_agency', nullable: true })
  nbEngineAgency: number | null;

  @Column('int', { name: 'nb_engine_valid_agency', nullable: true })
  nbEngineValidAgency: number | null;

  @Column('int', { name: 'nb_engine_logged_agency', nullable: true })
  nbEngineLoggedAgency: number | null;

  @Column('int', { name: 'nb_engine_visited_agency', nullable: true })
  nbEngineVisitedAgency: number | null;

  @Column('int', { name: 'nb_engine_used_agency', nullable: true })
  nbEngineUsedAgency: number | null;

  @Column('int', { name: 'nb_celeb_visited_agency', nullable: true })
  nbCelebVisitedAgency: number | null;

  @Column('int', { name: 'nb_celeb_consulted', nullable: true })
  nbCelebConsulted: number | null;

  @Column('int', {
    name: 'nb_celeb_consulted_by_agency_average',
    nullable: true,
  })
  nbCelebConsultedByAgencyAverage: number | null;

  @Column('int', { name: 'nb_project_created_agency', nullable: true })
  nbProjectCreatedAgency: number | null;

  @Column('int', { name: 'nb_by_admin_project_created', nullable: true })
  nbByAdminProjectCreated: number | null;

  @Column('int', { name: 'nb_by_agency_project_created', nullable: true })
  nbByAgencyProjectCreated: number | null;

  @Column('int', { name: 'nb_approved_project', nullable: true })
  nbApprovedProject: number | null;

  @Column('int', { name: 'revenue', nullable: true })
  revenue: number | null;

  @Column('int', { name: 'gross_profit', nullable: true })
  grossProfit: number | null;
}
