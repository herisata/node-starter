import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('project_periods')
export class ProjectPeriods {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'projectable_type', nullable: true, length: 191 })
  projectableType: string | null;

  @Column('int', { name: 'projectable_id', nullable: true })
  projectableId: number | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;

  @Column('datetime', { name: 'start_at', nullable: true })
  startAt: Date | null;

  @Column('datetime', { name: 'end_at', nullable: true })
  endAt: Date | null;

  @Column('varchar', { name: 'available', nullable: true, length: 191 })
  available: string | null;

  @Column('mediumtext', { name: 'comment', nullable: true })
  comment: string | null;

  @Column('tinyint', { name: 'confirmed', nullable: true, width: 1 })
  confirmed: boolean | null;

  @Column('varchar', { name: 'admin_definition', nullable: true, length: 191 })
  adminDefinition: string | null;
}
