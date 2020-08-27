import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_conversations_on_unique_id', ['uniqueId'], { unique: true })
@Index('index_conversations_on_project_id_and_last_message_at', ['projectId', 'lastMessageAt'], {})
@Entity('conversations')
export class Conversations {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'project_id' })
  projectId: number;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'last_message_at', nullable: true })
  lastMessageAt: Date | null;

  @Column('varchar', { name: 'unique_id', unique: true, length: 191 })
  uniqueId: string;

  @Column('varchar', {
    name: 'status',
    length: 191,
    default: () => "'ongoing'",
  })
  status: string;

  @Column('text', { name: 'whitelisted_emails', nullable: true })
  whitelistedEmails: string | null;
}
