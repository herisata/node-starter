import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('celeb_methods')
export class CelebMethods {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'valLeft', nullable: true, length: 191 })
  valLeft: string | null;

  @Column('varchar', { name: 'valRight', nullable: true, length: 191 })
  valRight: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
