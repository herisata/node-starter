import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('invoice_files')
export class InvoiceFiles {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'file', nullable: true, length: 191 })
  file: string | null;

  @Column('int', { name: 'contractable_id', nullable: true })
  contractableId: number | null;

  @Column('varchar', { name: 'contractable_type', nullable: true, length: 191 })
  contractableType: string | null;
}
