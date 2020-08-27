import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CelebritiesKeywords } from './CelebritiesKeywords';

@Entity('keywords')
export class Keywords {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'label', nullable: true, length: 191 })
  label: string | null;

  @OneToMany(() => CelebritiesKeywords, (celebritiesKeywords) => celebritiesKeywords.keyword)
  celebritiesKeywords: CelebritiesKeywords[];
}
