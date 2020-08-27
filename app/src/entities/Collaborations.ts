import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_collaborations_on_contact_id_and_project_id', ['contactId', 'projectId'], { unique: true })
@Index('foo', ['projectId', 'contactId'], { unique: true })
@Index('index_collaborations_on_via_team', ['viaTeam'], {})
@Entity('collaborations')
export class Collaborations {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'contact_id' })
  contactId: number;

  @Column('int', { name: 'project_id' })
  projectId: number;

  @Column('varchar', { name: 'role', length: 128, default: () => "'viewer'" })
  role: string;

  @Column('tinyint', { name: 'watching', width: 1, default: () => "'0'" })
  watching: boolean;

  @Column('int', { name: 'via_team', nullable: true })
  viaTeam: number | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;
}
