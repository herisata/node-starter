import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_proposition_deliveries_on_proposition_id', ['propositionId'], {
  unique: true,
})
@Entity('proposition_deliveries')
export class PropositionDeliveries {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('int', { name: 'proposition_id', unique: true })
  propositionId: number;

  @Column('int', { name: 'invested_budget', nullable: true })
  investedBudget: number | null;

  @Column('int', { name: 'total', nullable: true })
  total: number | null;

  @Column('int', { name: 'instagram', nullable: true })
  instagram: number | null;

  @Column('int', { name: 'instagram_stories', nullable: true })
  instagramStories: number | null;

  @Column('int', { name: 'facebook', nullable: true })
  facebook: number | null;

  @Column('int', { name: 'tiktok', nullable: true })
  tiktok: number | null;

  @Column('int', { name: 'twitter', nullable: true })
  twitter: number | null;

  @Column('int', { name: 'youtube', nullable: true })
  youtube: number | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;
}
