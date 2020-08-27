import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_cmi_brands_on_cmi_group_id', ['cmiGroupId'], {})
@Entity('cmi_brands')
export class CmiBrands {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'cmi_group_id', nullable: true })
  cmiGroupId: number | null;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name: string | null;

  @Column('varchar', { name: 'sector', nullable: true, length: 191 })
  sector: string | null;

  @Column('varchar', { name: 'logo', nullable: true, length: 191 })
  logo: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
