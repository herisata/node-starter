import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_team_memberships_on_team_id_and_contact_id', ['teamId', 'contactId'], { unique: true })
@Index('index_team_memberships_on_contact_id_and_team_id', ['contactId', 'teamId'], {})
@Entity('team_memberships')
export class TeamMemberships {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'team_id' })
  teamId: number;

  @Column('int', { name: 'contact_id' })
  contactId: number;

  @Column('varchar', { name: 'role', nullable: true, length: 191 })
  role: string | null;

  @Column('varchar', {
    name: 'default_role',
    length: 191,
    default: () => "'editor'",
  })
  defaultRole: string;
}
