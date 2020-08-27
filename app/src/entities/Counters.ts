import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('counters')
export class Counters {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name: string | null;

  @Column('mediumtext', { name: 'description', nullable: true })
  description: string | null;

  @Column('int', { name: 'value', nullable: true })
  value: number | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
