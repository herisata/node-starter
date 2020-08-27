import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_on_conversation_and_writer', ['conversationId', 'writerId', 'writerType'], { unique: true })
@Entity('participants')
export class Participants {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'conversation_id' })
  conversationId: number;

  @Column('varchar', { name: 'writer_type', length: 191 })
  writerType: string;

  @Column('int', { name: 'writer_id' })
  writerId: number;

  @Column('varchar', { name: 'role', length: 191, default: () => "'member'" })
  role: string;

  @Column('int', { name: 'unread_messages', default: () => "'0'" })
  unreadMessages: number;

  @Column('tinyint', {
    name: 'muted',
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  muted: boolean | null;
}
