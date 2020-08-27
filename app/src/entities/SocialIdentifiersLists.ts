import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_social_identifiers_lists_on_social_network_account_id', ['socialNetworkAccountId'], {})
@Entity('social_identifiers_lists')
export class SocialIdentifiersLists {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'social_network_account_id' })
  socialNetworkAccountId: number;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('text', { name: 'raw_data', nullable: true })
  rawData: string | null;

  @Column('text', { name: 'emails', nullable: true })
  emails: string | null;

  @Column('text', { name: 'usernames', nullable: true })
  usernames: string | null;
}
