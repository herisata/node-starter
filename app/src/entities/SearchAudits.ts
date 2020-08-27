import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_search_audits_on_user_id', ['userId'], {})
@Entity('search_audits')
export class SearchAudits {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id', nullable: true })
  userId: number | null;

  @Column('mediumtext', { name: 'search_type', nullable: true })
  searchType: string | null;

  @Column('mediumtext', { name: 'url', nullable: true })
  url: string | null;

  @Column('mediumtext', { name: 'results', nullable: true })
  results: string | null;

  @Column('mediumtext', { name: 'params', nullable: true })
  params: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('varchar', { name: 'search_id', nullable: true, length: 191 })
  searchId: string | null;

  @Column('int', { name: 'count_max_results', default: () => "'0'" })
  countMaxResults: number;

  @Column('int', { name: 'count_show_page', default: () => "'0'" })
  countShowPage: number;

  @Column('mediumtext', { name: 'pages' })
  pages: string;

  @Column('mediumtext', { name: 'show_profiles', nullable: true })
  showProfiles: string | null;
}
