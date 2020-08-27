import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('propales')
export class Propales {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('mediumtext', { name: 'description', nullable: true })
  description: string | null;

  @Column('mediumtext', { name: 'target', nullable: true })
  target: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name: string | null;

  @Column('mediumtext', { name: 'context', nullable: true })
  context: string | null;

  @Column('mediumtext', { name: 'theme', nullable: true })
  theme: string | null;

  @Column('varchar', { name: 'city', nullable: true, length: 191 })
  city: string | null;

  @Column('varchar', { name: 'zip_code', nullable: true, length: 191 })
  zipCode: string | null;

  @Column('varchar', { name: 'country', nullable: true, length: 191 })
  country: string | null;

  @Column('tinyint', {
    name: 'active',
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  active: boolean | null;

  @Column('mediumtext', { name: 'media_plan', nullable: true })
  mediaPlan: string | null;

  @Column('varchar', { name: 'pdf_doc', nullable: true, length: 191 })
  pdfDoc: string | null;

  @Column('mediumtext', { name: 'duration', nullable: true })
  duration: string | null;

  @Column('varchar', {
    name: 'pdf_doc_cache_name',
    nullable: true,
    length: 191,
  })
  pdfDocCacheName: string | null;

  @Column('datetime', { name: 'activated_at', nullable: true })
  activatedAt: Date | null;

  @Column('int', { name: 'budget_min', nullable: true })
  budgetMin: number | null;

  @Column('int', { name: 'budget_max', nullable: true })
  budgetMax: number | null;

  @Column('int', { name: 'projectable_id', nullable: true })
  projectableId: number | null;

  @Column('varchar', { name: 'projectable_type', nullable: true, length: 191 })
  projectableType: string | null;
}
