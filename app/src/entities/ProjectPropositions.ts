import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('project_propositions')
export class ProjectPropositions {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('varchar', { name: 'workflow_state', nullable: true, length: 191 })
  workflowState: string | null;

  @Column('int', { name: 'project_root_id', nullable: true })
  projectRootId: number | null;

  @Column('int', { name: 'celebrity_id', nullable: true })
  celebrityId: number | null;

  @Column('tinyint', {
    name: 'wish',
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  wish: boolean | null;

  @Column('tinyint', {
    name: 'reco',
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  reco: boolean | null;

  @Column('tinyint', {
    name: 'deny',
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  deny: boolean | null;

  @Column('int', { name: 'initialized_by', nullable: true })
  initializedBy: number | null;

  @Column('datetime', { name: 'published_at', nullable: true })
  publishedAt: Date | null;

  @Column('int', { name: 'published_by', nullable: true })
  publishedBy: number | null;

  @Column('datetime', { name: 'accepted_at', nullable: true })
  acceptedAt: Date | null;

  @Column('int', { name: 'accepted_by', nullable: true })
  acceptedBy: number | null;

  @Column('datetime', { name: 'canceled_at', nullable: true })
  canceledAt: Date | null;

  @Column('int', { name: 'canceled_by', nullable: true })
  canceledBy: number | null;

  @Column('datetime', { name: 'confirmed_at', nullable: true })
  confirmedAt: Date | null;

  @Column('int', { name: 'confirmed_by', nullable: true })
  confirmedBy: number | null;

  @Column('mediumtext', { name: 'comment', nullable: true })
  comment: string | null;

  @Column('mediumtext', { name: 'justification', nullable: true })
  justification: string | null;

  @Column('int', { name: 'celebrity_price', nullable: true })
  celebrityPrice: number | null;

  @Column('int', { name: 'bandc_price', nullable: true })
  bandcPrice: number | null;

  @Column('tinyint', {
    name: 'cgv_agency',
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  cgvAgency: boolean | null;

  @Column('tinyint', {
    name: 'cgv_celebrity',
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  cgvCelebrity: boolean | null;

  @Column('varchar', { name: 'order_form', nullable: true, length: 191 })
  orderForm: string | null;

  @Column('varchar', {
    name: 'order_form_cache_name',
    nullable: true,
    length: 191,
  })
  orderFormCacheName: string | null;

  @Column('varchar', {
    name: 'celebrity_project_agreement',
    nullable: true,
    length: 191,
  })
  celebrityProjectAgreement: string | null;

  @Column('int', { name: 'new_id', nullable: true })
  newId: number | null;
}
