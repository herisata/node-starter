import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_social_links', ['socialableId', 'socialableType', 'socialNetworkAccountId'], { unique: true })
@Index('index_social_links_on_sna_id', ['socialNetworkAccountId'], {})
@Entity('social_links')
export class SocialLinks {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'socialable_id' })
  socialableId: number;

  @Column('varchar', { name: 'socialable_type', nullable: true, length: 191 })
  socialableType: string | null;

  @Column('int', { name: 'social_network_account_id' })
  socialNetworkAccountId: number;

  @Column('varchar', {
    name: 'status',
    nullable: true,
    length: 191,
    default: () => "'uncertified'",
  })
  status: string | null;

  @Column('tinyint', { name: 'visible', width: 1, default: () => "'0'" })
  visible: boolean;
}
