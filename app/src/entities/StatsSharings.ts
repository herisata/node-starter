import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_stats_sharings_on_public_profile_id', ['publicProfileId'], {})
@Index('index_stats_sharings_on_is_active', ['isActive'], {})
@Index('index_stats_sharings_on_start_date', ['startDate'], {})
@Index('index_stats_sharings_on_end_date', ['endDate'], {})
@Entity('stats_sharings')
export class StatsSharings {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('bigint', { name: 'public_profile_id', nullable: true })
  publicProfileId: string | null;

  @Column('varchar', {
    name: 'public_profile_name',
    nullable: true,
    length: 191,
  })
  publicProfileName: string | null;

  @Column('tinyint', {
    name: 'is_active',
    nullable: true,
    width: 1,
    default: () => "'1'",
  })
  isActive: boolean | null;

  @Column('datetime', { name: 'consented_at', nullable: true })
  consentedAt: Date | null;

  @Column('datetime', { name: 'canceled_at', nullable: true })
  canceledAt: Date | null;

  @Column('text', { name: 'consent_extended_at', nullable: true })
  consentExtendedAt: string | null;

  @Column('date', { name: 'start_date', nullable: true })
  startDate: string | null;

  @Column('date', { name: 'end_date', nullable: true })
  endDate: string | null;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;
}
