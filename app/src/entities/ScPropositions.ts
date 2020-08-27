import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ScInfluencerTweets } from './ScInfluencerTweets';
import { ScRoots } from './ScRoots';

@Index('index_sc_propositions_on_sc_root_id', ['scRootId'], {})
@Index('index_sc_propositions_on_celebrity_id', ['celebrityId'], {})
@Entity('sc_propositions')
export class ScPropositions {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'sc_root_id', nullable: true })
  scRootId: number | null;

  @Column('int', { name: 'celebrity_id', nullable: true })
  celebrityId: number | null;

  @Column('varchar', { name: 'workflow_state', nullable: true, length: 191 })
  workflowState: string | null;

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

  @Column('int', { name: 'celebrity_price', nullable: true })
  celebrityPrice: number | null;

  @Column('int', { name: 'bandc_price', nullable: true })
  bandcPrice: number | null;

  @Column('mediumtext', { name: 'comment', nullable: true })
  comment: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('tinyint', { name: 'photo_accepted', nullable: true, width: 1 })
  photoAccepted: boolean | null;

  @Column('varchar', {
    name: 'celebrity_agreement',
    nullable: true,
    length: 191,
  })
  celebrityAgreement: string | null;

  @Column('int', { name: 'invoice_file_id', nullable: true })
  invoiceFileId: number | null;

  @Column('tinyint', {
    name: 'has_been_contacted',
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  hasBeenContacted: boolean | null;

  @OneToMany(() => ScInfluencerTweets, (scInfluencerTweets) => scInfluencerTweets.scProposition)
  scInfluencerTweets: ScInfluencerTweets[];

  @ManyToOne(() => ScRoots, (scRoots) => scRoots.scPropositions, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'sc_root_id', referencedColumnName: 'id' }])
  scRoot: ScRoots;
}
