import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_on_conversation_and_writer', ['conversationId', 'writerId', 'writerType'], {})
@Entity('messages')
export class Messages {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'conversation_id' })
  conversationId: number;

  @Column('varchar', { name: 'writer_type', length: 191 })
  writerType: string;

  @Column('int', { name: 'writer_id' })
  writerId: number;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('varchar', { name: 'object', nullable: true, length: 191 })
  object: string | null;

  @Column('text', { name: 'content', nullable: true })
  content: string | null;

  @Column('tinyint', { name: 'moderated', width: 1, default: () => "'0'" })
  moderated: boolean;

  @Column('varchar', {
    name: 'message_type',
    length: 191,
    default: () => "'message'",
  })
  messageType: string;

  @Column('varchar', { name: 'subtype', nullable: true, length: 191 })
  subtype: string | null;

  @Column('tinyint', {
    name: 'from_mail',
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  fromMail: boolean | null;
}
