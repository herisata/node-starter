import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_prop_product_placement_youtubes_on_prop_category_id', ['propositionCategoryId'], {})
@Entity('proposition_product_placement_youtubes')
export class PropositionProductPlacementYoutubes {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('int', { name: 'celebrity_id', nullable: true })
  celebrityId: number | null;

  @Column('int', {
    name: 'project_product_placement_youtube_id',
    nullable: true,
  })
  projectProductPlacementYoutubeId: number | null;

  @Column('varchar', { name: 'aasm_state', nullable: true, length: 191 })
  aasmState: string | null;

  @Column('tinyint', { name: 'reco', nullable: true, width: 1 })
  reco: boolean | null;

  @Column('int', { name: 'celebrity_price', nullable: true })
  celebrityPrice: number | null;

  @Column('int', { name: 'bandc_price', nullable: true })
  bandcPrice: number | null;

  @Column('tinyint', { name: 'estimated_price', nullable: true, width: 1 })
  estimatedPrice: boolean | null;

  @Column('mediumtext', { name: 'comment', nullable: true })
  comment: string | null;

  @Column('tinyint', { name: 'signed_by_agency', nullable: true, width: 1 })
  signedByAgency: boolean | null;

  @Column('tinyint', { name: 'signed_by_celebrity', nullable: true, width: 1 })
  signedByCelebrity: boolean | null;

  @Column('varchar', { name: 'order_form_file', nullable: true, length: 191 })
  orderFormFile: string | null;

  @Column('varchar', { name: 'invoice_file', nullable: true, length: 191 })
  invoiceFile: string | null;

  @Column('int', { name: 'proposition_category_id', nullable: true })
  propositionCategoryId: number | null;

  @Column('tinyint', {
    name: 'has_been_contacted',
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  hasBeenContacted: boolean | null;
}
