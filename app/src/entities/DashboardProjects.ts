import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('dashboard_projects')
export class DashboardProjects {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('varchar', { name: 'label', nullable: true, length: 191 })
  label: string | null;

  @Column('int', { name: 'nb_projects_created', nullable: true })
  nbProjectsCreated: number | null;

  @Column('int', { name: 'nb_projects_confirmed', nullable: true })
  nbProjectsConfirmed: number | null;

  @Column('int', { name: 'margin_bandc', nullable: true })
  marginBandc: number | null;

  @Column('int', { name: 'turnover', nullable: true })
  turnover: number | null;
}
