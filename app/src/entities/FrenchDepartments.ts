import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('french_departments')
export class FrenchDepartments {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'region_name', nullable: true, length: 191 })
  regionName: string | null;

  @Column('varchar', { name: 'department_number', nullable: true, length: 191 })
  departmentNumber: string | null;

  @Column('varchar', { name: 'department_name', nullable: true, length: 191 })
  departmentName: string | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;
}
