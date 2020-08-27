import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_projects_on_share_token', ['shareToken'], { unique: true })
@Index('index_projects_on_team_id', ['teamId'], {})
@Entity('projects')
export class Projects {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name: string | null;

  @Column('varchar', {
    name: 'state',
    nullable: true,
    length: 191,
    default: () => "'draft'",
  })
  state: string | null;

  @Column('int', { name: 'project_type', default: () => "'0'" })
  projectType: number;

  @Column('tinyint', { name: 'is_private', width: 1, default: () => "'0'" })
  isPrivate: boolean;

  @Column('int', { name: 'admin_user_id', nullable: true })
  adminUserId: number | null;

  @Column('varchar', { name: 'client_name', nullable: true, length: 191 })
  clientName: string | null;

  @Column('int', { name: 'team_id', nullable: true })
  teamId: number | null;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @Column('datetime', { name: 'start_at', nullable: true })
  startAt: Date | null;

  @Column('datetime', { name: 'end_at', nullable: true })
  endAt: Date | null;

  @Column('text', { name: 'data', nullable: true })
  data: string | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;

  @Column('varchar', {
    name: 'share_token',
    nullable: true,
    unique: true,
    length: 191,
  })
  shareToken: string | null;

  @Column('datetime', { name: 'share_expires_at', nullable: true })
  shareExpiresAt: Date | null;

  @Column('tinyint', {
    name: 'hidden_rm',
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  hiddenRm: boolean | null;

  @Column('tinyint', {
    name: 'is_social_listening_active',
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  isSocialListeningActive: boolean | null;

  @Column('datetime', { name: 'last_social_listening_at', nullable: true })
  lastSocialListeningAt: Date | null;
}
