import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('agency_wish_lists')
export class AgencyWishLists {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'agency_id', nullable: true })
  agencyId: number | null;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
