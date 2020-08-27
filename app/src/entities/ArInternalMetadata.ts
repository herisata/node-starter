import { Column, Entity } from 'typeorm';

@Entity('ar_internal_metadata')
export class ArInternalMetadata {
  @Column('varchar', { primary: true, name: 'key', length: 255 })
  key: string;

  @Column('varchar', { name: 'value', nullable: true, length: 255 })
  value: string | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;
}
