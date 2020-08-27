import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_account_creation_requests_on_social_network_account_id', ['socialNetworkAccountId'], {})
@Index('index_requests_on_user_and_sna', ['userId', 'socialNetworkAccountId'], {})
@Entity('account_creation_requests')
export class AccountCreationRequests {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('int', { name: 'social_network_account_id' })
  socialNetworkAccountId: number;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'completed_at', nullable: true })
  completedAt: Date | null;

  @Column('varchar', {
    name: 'scenario',
    length: 191,
    default: () => "'legacy'",
  })
  scenario: string;

  @Column('text', { name: 'project_ids', nullable: true })
  projectIds: string | null;
}
