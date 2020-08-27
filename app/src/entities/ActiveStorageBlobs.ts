import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_active_storage_blobs_on_key', ['key'], { unique: true })
@Entity('active_storage_blobs')
export class ActiveStorageBlobs {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('varchar', { name: 'key', unique: true, length: 191 })
  key: string;

  @Column('varchar', { name: 'filename', length: 191 })
  filename: string;

  @Column('varchar', { name: 'content_type', nullable: true, length: 191 })
  contentType: string | null;

  @Column('text', { name: 'metadata', nullable: true })
  metadata: string | null;

  @Column('bigint', { name: 'byte_size' })
  byteSize: string;

  @Column('varchar', { name: 'checksum', length: 191 })
  checksum: string;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;
}
