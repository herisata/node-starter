import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_public_profiles_on_celebrity_id', ['celebrityId'], {
  unique: true,
})
@Index('index_public_profiles_on_flags', ['flags'], {})
@Index('index_public_profiles_on_status', ['status'], {})
@Index('index_public_profiles_on_type', ['type'], {})
@Entity('public_profiles')
export class PublicProfiles {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'first_name', nullable: true, length: 191 })
  firstName: string | null;

  @Column('varchar', { name: 'last_name', nullable: true, length: 191 })
  lastName: string | null;

  @Column('varchar', { name: 'pseudo', nullable: true, length: 191 })
  pseudo: string | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;

  @Column('text', { name: 'nationalities', nullable: true })
  nationalities: string | null;

  @Column('varchar', { name: 'gender', nullable: true, length: 191 })
  gender: string | null;

  @Column('int', { name: 'celebrity_id', nullable: true, unique: true })
  celebrityId: number | null;

  @Column('text', { name: 'picture_url', nullable: true })
  pictureUrl: string | null;

  @Column('float', { name: 'celebrity_score', nullable: true, precision: 12 })
  celebrityScore: number | null;

  @Column('date', { name: 'birthday', nullable: true })
  birthday: string | null;

  @Column('int', { name: 'birthyear', nullable: true })
  birthyear: number | null;

  @Column('text', { name: 'data', nullable: true })
  data: string | null;

  @Column('varchar', {
    name: 'status',
    nullable: true,
    length: 191,
    default: () => "'qualified'",
  })
  status: string | null;

  @Column('varchar', { name: 'type', nullable: true, length: 191 })
  type: string | null;

  @Column('bigint', { name: 'flags', default: () => "'0'" })
  flags: string;

  @Column('int', {
    name: 'completion_percent',
    nullable: true,
    default: () => "'0'",
  })
  completionPercent: number | null;

  @Column('varchar', {
    name: 'salesforce_contact_id',
    nullable: true,
    length: 255,
  })
  salesforceContactId: string | null;

  @Column('varchar', { name: 'locale', nullable: true, length: 191 })
  locale: string | null;

  @Column('varchar', { name: 'lang', nullable: true, length: 191 })
  lang: string | null;
}
