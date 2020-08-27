import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('addressable_category', ['addressableId', 'addressableType', 'category'], {})
@Entity('address_books')
export class AddressBooks {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'address_id' })
  addressId: number;

  @Column('int', { name: 'addressable_id' })
  addressableId: number;

  @Column('varchar', { name: 'addressable_type', length: 191 })
  addressableType: string;

  @Column('varchar', { name: 'category', nullable: true, length: 191 })
  category: string | null;
}
