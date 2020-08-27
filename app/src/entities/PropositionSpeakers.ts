import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_proposition_speakers_on_proposition_category_id', ['propositionCategoryId'], {})
@Entity('proposition_speakers')
export class PropositionSpeakers {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'celebrity_id', nullable: true })
  celebrityId: number | null;

  @Column('int', { name: 'project_speaker_id', nullable: true })
  projectSpeakerId: number | null;

  @Column('varchar', { name: 'aasm_state', nullable: true, length: 191 })
  aasmState: string | null;

  @Column('tinyint', { name: 'reco', nullable: true, width: 1 })
  reco: boolean | null;

  @Column('tinyint', { name: 'wish', nullable: true, width: 1 })
  wish: boolean | null;

  @Column('int', { name: 'celebrity_price', nullable: true })
  celebrityPrice: number | null;

  @Column('int', { name: 'bandc_price', nullable: true })
  bandcPrice: number | null;

  @Column('mediumtext', { name: 'comment', nullable: true })
  comment: string | null;

  @Column('datetime', { name: 'signed_by_agency_at', nullable: true })
  signedByAgencyAt: Date | null;

  @Column('datetime', { name: 'signed_by_celebrity_at', nullable: true })
  signedByCelebrityAt: Date | null;

  @Column('tinyint', { name: 'signed_by_agency_rm', nullable: true, width: 1 })
  signedByAgencyRm: boolean | null;

  @Column('tinyint', {
    name: 'signed_by_celebrity_rm',
    nullable: true,
    width: 1,
  })
  signedByCelebrityRm: boolean | null;

  @Column('varchar', { name: 'order_form_file', nullable: true, length: 191 })
  orderFormFile: string | null;

  @Column('varchar', { name: 'invoice_file', nullable: true, length: 191 })
  invoiceFile: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('int', { name: 'proposition_category_id', nullable: true })
  propositionCategoryId: number | null;

  @Column('tinyint', {
    name: 'has_been_contacted',
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  hasBeenContacted: boolean | null;

  @Column('varchar', {
    name: 'salesforce_product_id',
    nullable: true,
    length: 255,
  })
  salesforceProductId: string | null;

  @Column('text', { name: 'specific_terms', nullable: true })
  specificTerms: string | null;
}
