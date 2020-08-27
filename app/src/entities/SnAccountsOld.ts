import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_sn_accounts_old_on_celebrity_id_and_uid_and_label', ['celebrityId', 'uid', 'label'], { unique: true })
@Entity('sn_accounts_old')
export class SnAccountsOld {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'celebrity_id', nullable: true })
  celebrityId: number | null;

  @Column('varchar', { name: 'label', nullable: true, length: 191 })
  label: string | null;

  @Column('varchar', { name: 'uid', nullable: true, length: 191 })
  uid: string | null;

  @Column('tinyint', { name: 'primary', nullable: true, width: 1 })
  primary: boolean | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;
}
