import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('history_automations')
export class HistoryAutomations {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;

  @Column('date', { name: 'day', nullable: true })
  day: string | null;

  @Column('mediumtext', { name: 'created_by', nullable: true })
  createdBy: string | null;

  @Column('mediumtext', { name: 'created_via', nullable: true })
  createdVia: string | null;
}
