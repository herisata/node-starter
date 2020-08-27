import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('twitter_users')
export class TwitterUsers {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name: string | null;

  @Column('varchar', { name: 'image_url', nullable: true, length: 191 })
  imageUrl: string | null;

  @Column('int', { name: 'user_id', nullable: true })
  userId: number | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('varchar', { name: 'screen_name', nullable: true, length: 191 })
  screenName: string | null;

  @Column('tinyint', { name: 'verified_account', nullable: true, width: 1 })
  verifiedAccount: boolean | null;

  @Column('varchar', { name: 'uid', nullable: true, length: 191 })
  uid: string | null;
}
