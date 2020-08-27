import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('social_data_histories')
export class SocialDataHistories {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('mediumtext', { name: 'top_boss_news', nullable: true })
  topBossNews: string | null;
}
