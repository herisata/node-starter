import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_download_links_on_token', ['token'], {})
@Index('index_download_links_on_expires_at', ['expiresAt'], {})
@Index('index_download_links_on_downloadable_type_and_downloadable_id', ['downloadableType', 'downloadableId'], {})
@Entity('download_links')
export class DownloadLinks {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('varchar', { name: 'token', length: 191 })
  token: string;

  @Column('datetime', { name: 'expires_at' })
  expiresAt: Date;

  @Column('varchar', { name: 'downloadable_type', length: 191 })
  downloadableType: string;

  @Column('bigint', { name: 'downloadable_id' })
  downloadableId: string;

  @Column('bigint', { name: 'blob_id' })
  blobId: string;
}
