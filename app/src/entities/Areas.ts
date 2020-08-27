import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('areas')
export class Areas {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'code', nullable: true, length: 191 })
  code: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
