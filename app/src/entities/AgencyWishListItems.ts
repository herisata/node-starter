import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_agency_wish_list_items_on_celebrity_id', ['celebrityId'], {})
@Index('index_agency_wish_list_items_on_engine_id', ['engineId'], {})
@Entity('agency_wish_list_items')
export class AgencyWishListItems {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'agency_wish_list_id', nullable: true })
  agencyWishListId: number | null;

  @Column('int', { name: 'celebrity_id', nullable: true })
  celebrityId: number | null;

  @Column('datetime', { name: 'deleted_at', nullable: true })
  deletedAt: Date | null;

  @Column('datetime', { name: 'selected_at', nullable: true })
  selectedAt: Date | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('int', { name: 'engine_id', nullable: true })
  engineId: number | null;

  @Column('varchar', { name: 'acceptable_type', nullable: true, length: 191 })
  acceptableType: string | null;

  @Column('int', { name: 'acceptable_id', nullable: true })
  acceptableId: number | null;
}
