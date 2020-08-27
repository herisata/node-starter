import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('propale_propositions')
export class PropalePropositions {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;

  @Column('int', { name: 'propalable_id', nullable: true })
  propalableId: number | null;

  @Column('varchar', { name: 'propalable_type', nullable: true, length: 191 })
  propalableType: string | null;

  @Column('int', { name: 'propositionable_id', nullable: true })
  propositionableId: number | null;

  @Column('varchar', {
    name: 'propositionable_type',
    nullable: true,
    length: 191,
  })
  propositionableType: string | null;
}
