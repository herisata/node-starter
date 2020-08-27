import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_twitter_bots_on_tb_task_id', ['tbTaskId'], {})
@Entity('twitter_bots')
export class TwitterBots {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name: string | null;

  @Column('varchar', { name: 'uid', nullable: true, length: 191 })
  uid: string | null;

  @Column('varchar', { name: 'oauth_token', nullable: true, length: 191 })
  oauthToken: string | null;

  @Column('varchar', {
    name: 'oauth_token_secret',
    nullable: true,
    length: 191,
  })
  oauthTokenSecret: string | null;

  @Column('int', { name: 'tb_task_id', nullable: true })
  tbTaskId: number | null;

  @Column('tinyint', {
    name: 'last_used',
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  lastUsed: boolean | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
