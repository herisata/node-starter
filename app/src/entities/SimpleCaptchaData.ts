import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('idx_key', ['key'], {})
@Entity('simple_captcha_data')
export class SimpleCaptchaData {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'key', nullable: true, length: 40 })
  key: string | null;

  @Column('varchar', { name: 'value', nullable: true, length: 6 })
  value: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
