import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_profile_locale', ['publicProfileId', 'locale'], { unique: true })
@Entity('public_profile_translations')
export class PublicProfileTranslations {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'public_profile_id' })
  publicProfileId: number;

  @Column('varchar', { name: 'locale', length: 20 })
  locale: string;

  @Column('text', { name: 'small_descr', nullable: true })
  smallDescr: string | null;

  @Column('text', { name: 'descr', nullable: true })
  descr: string | null;

  @Column('text', { name: 'full_descr', nullable: true })
  fullDescr: string | null;

  @Column('text', { name: 'key_facts', nullable: true })
  keyFacts: string | null;
}
