import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_proposition_statuses_on_owner_id_and_owner_type_and_name', ['ownerId', 'ownerType', 'name'], {
  unique: true,
})
@Entity('proposition_statuses')
export class PropositionStatuses {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name: string | null;

  @Column('int', { name: 'owner_id' })
  ownerId: number;

  @Column('varchar', { name: 'owner_type', length: 191 })
  ownerType: string;

  @Column('int', { name: 'position', default: () => "'0'" })
  position: number;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;
}
