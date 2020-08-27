import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ScDraftTweets } from './ScDraftTweets';
import { ScPropositions } from './ScPropositions';
import { ScRootGoalLinks } from './ScRootGoalLinks';

@Index('index_sc_roots_on_agency_id', ['agencyId'], {})
@Index('index_sc_roots_on_admin_user_id', ['adminUserId'], {})
@Entity('sc_roots')
export class ScRoots {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name: string | null;

  @Column('varchar', { name: 'workflow_state', nullable: true, length: 191 })
  workflowState: string | null;

  @Column('varchar', { name: 'reference', nullable: true, length: 191 })
  reference: string | null;

  @Column('mediumtext', { name: 'description', nullable: true })
  description: string | null;

  @Column('int', { name: 'agency_id', nullable: true })
  agencyId: number | null;

  @Column('int', { name: 'admin_user_id', nullable: true })
  adminUserId: number | null;

  @Column('tinyint', {
    name: 'from_wish_list',
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  fromWishList: boolean | null;

  @Column('varchar', { name: 'invoice_file', nullable: true, length: 191 })
  invoiceFile: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('date', { name: 'reply_date', nullable: true })
  replyDate: string | null;

  @Column('mediumtext', { name: 'reply_info', nullable: true })
  replyInfo: string | null;

  @Column('mediumtext', { name: 'date_comment', nullable: true })
  dateComment: string | null;

  @Column('int', { name: 'implementation_price', nullable: true })
  implementationPrice: number | null;

  @Column('mediumtext', { name: 'budget', nullable: true })
  budget: string | null;

  @Column('date', { name: 'started_at', nullable: true })
  startedAt: string | null;

  @Column('date', { name: 'ended_at', nullable: true })
  endedAt: string | null;

  @OneToMany(() => ScDraftTweets, (scDraftTweets) => scDraftTweets.scRoot)
  scDraftTweets: ScDraftTweets[];

  @OneToMany(() => ScPropositions, (scPropositions) => scPropositions.scRoot)
  scPropositions: ScPropositions[];

  @OneToMany(() => ScRootGoalLinks, (scRootGoalLinks) => scRootGoalLinks.scRoot)
  scRootGoalLinks: ScRootGoalLinks[];
}
