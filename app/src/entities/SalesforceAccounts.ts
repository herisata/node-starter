import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('salesforce_accounts')
export class SalesforceAccounts {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('varchar', { name: 'sf_id', length: 191 })
  sfId: string;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;

  @Column('varchar', { name: 'country', nullable: true, length: 191 })
  country: string | null;

  @Column('text', { name: 'products', nullable: true })
  products: string | null;

  @Column('int', { name: 'admin_user_id', nullable: true })
  adminUserId: number | null;
}
