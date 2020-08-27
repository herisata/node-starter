import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_notifications_on_user_id', ['userId'], {})
@Index('index_notifications_on_conversation_id', ['conversationId'], {})
@Entity('notifications')
export class Notifications {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id', nullable: true })
  userId: number | null;

  @Column('varchar', { name: 'type', nullable: true, length: 191 })
  type: string | null;

  @Column('mediumtext', { name: 'body', nullable: true })
  body: string | null;

  @Column('varchar', { name: 'subject', nullable: true, length: 191 })
  subject: string | null;

  @Column('int', { name: 'conversation_id', nullable: true })
  conversationId: number | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
