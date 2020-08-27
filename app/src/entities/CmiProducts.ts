import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_cmi_products_on_cmi_brand_id', ['cmiBrandId'], {})
@Entity('cmi_products')
export class CmiProducts {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'cmi_brand_id', nullable: true })
  cmiBrandId: number | null;

  @Column('varchar', { name: 'product_type', nullable: true, length: 191 })
  productType: string | null;

  @Column('varchar', { name: 'product_name', nullable: true, length: 191 })
  productName: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
