import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_user_subscriptions_on_user_id_and_engine_id', ['userId', 'engineId'], { unique: true })
@Index('index_user_subscriptions_on_engine_id', ['engineId'], {})
@Entity('user_subscriptions')
export class UserSubscriptions {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('int', { name: 'engine_id' })
  engineId: number;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;
}
