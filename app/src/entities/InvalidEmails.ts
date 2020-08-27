import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_invalid_emails_on_email', ['email'], { unique: true })
@Entity('invalid_emails')
export class InvalidEmails {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('varchar', {
    name: 'email',
    nullable: true,
    unique: true,
    length: 191,
  })
  email: string | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;
}
