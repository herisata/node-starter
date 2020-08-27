import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_sna_uid_label', ['uid', 'label'], { unique: true })
@Index('index_sna_socialable', ['socialableId', 'socialableType'], {})
@Index('index_sna_label', ['label'], {})
@Index('index_social_network_accounts_on_flags', ['flags'], {})
@Index('index_social_network_accounts_on_username_and_label', ['username', 'label'], {})
@Index('index_social_network_accounts_on_oauth_account_id', ['oauthAccountId'], {})
@Entity('social_network_accounts')
export class SocialNetworkAccounts {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'socialable_id', nullable: true })
  socialableId: number | null;

  @Column('varchar', { name: 'socialable_type', nullable: true, length: 191 })
  socialableType: string | null;

  @Column('varchar', { name: 'label', length: 191 })
  label: string;

  @Column('varchar', { name: 'uid', length: 191 })
  uid: string;

  @Column('varchar', { name: 'business_id', nullable: true, length: 191 })
  businessId: string | null;

  @Column('int', { name: 'oauth_account_id', nullable: true })
  oauthAccountId: number | null;

  @Column('varchar', { name: 'username', nullable: true, length: 191 })
  username: string | null;

  @Column('text', { name: 'display_name', nullable: true })
  displayName: string | null;

  @Column('tinyint', { name: 'primary', width: 1, default: () => "'1'" })
  primary: boolean;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;

  @Column('datetime', { name: 'last_processed_at', nullable: true })
  lastProcessedAt: Date | null;

  @Column('text', { name: 'profile_picture', nullable: true })
  profilePicture: string | null;

  @Column('double', { name: 'price', nullable: true, precision: 22 })
  price: number | null;

  @Column('mediumtext', { name: 'biography', nullable: true })
  biography: string | null;

  @Column('varchar', { name: 'category', nullable: true, length: 191 })
  category: string | null;

  @Column('varchar', { name: 'country', nullable: true, length: 191 })
  country: string | null;

  @Column('bigint', { name: 'flags', default: () => "'0'" })
  flags: string;

  @Column('date', { name: 'last_media_on', nullable: true })
  lastMediaOn: string | null;
}
