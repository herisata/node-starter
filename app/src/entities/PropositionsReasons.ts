import { Column, Entity, Index } from 'typeorm';

@Index('index_propositions_reasons_on_celebrity_reasons_id', ['celebrityReasonsId'], {})
@Index('index_propositions_reasons_on_project_propositions_id', ['projectPropositionsId'], {})
@Entity('propositions_reasons')
export class PropositionsReasons {
  @Column('int', { name: 'celebrity_reasons_id', nullable: true })
  celebrityReasonsId: number | null;

  @Column('int', { name: 'project_propositions_id', nullable: true })
  projectPropositionsId: number | null;
}
