import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_active_storage_attachments_uniqueness', ['recordType', 'recordId', 'name', 'blobId'], { unique: true })
@Index('index_active_storage_attachments_on_blob_id', ['blobId'], {})
@Entity('active_storage_attachments')
export class ActiveStorageAttachments {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

  @Column('varchar', { name: 'record_type', length: 191 })
  recordType: string;

  @Column('int', { name: 'record_id' })
  recordId: number;

  @Column('bigint', { name: 'blob_id' })
  blobId: string;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;
}
