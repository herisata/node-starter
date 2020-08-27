import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('message_templates')
export class MessageTemplates {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('varchar', { name: 'label', length: 191 })
  label: string;

  @Column('text', { name: 'content', nullable: true })
  content: string | null;
}
