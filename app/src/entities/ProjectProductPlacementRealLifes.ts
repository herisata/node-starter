import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_project_product_placement_real_lifes_on_agency_id', ['agencyId'], {})
@Index('index_project_product_placement_real_lifes_on_admin_user_id', ['adminUserId'], {})
@Entity('project_product_placement_real_lifes')
export class ProjectProductPlacementRealLifes {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('int', { name: 'agency_id', nullable: true })
  agencyId: number | null;

  @Column('varchar', { name: 'aasm_state', nullable: true, length: 191 })
  aasmState: string | null;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name: string | null;

  @Column('mediumtext', { name: 'description', nullable: true })
  description: string | null;

  @Column('int', { name: 'admin_user_id', nullable: true })
  adminUserId: number | null;
}
