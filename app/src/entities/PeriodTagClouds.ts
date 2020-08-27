import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('period_tag_clouds')
export class PeriodTagClouds {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'period', nullable: true, length: 191 })
  period: string | null;

  @Column('longtext', { name: 'data', nullable: true })
  data: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
