import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_ag_categories_on_id', ['id'], {})
@Entity('ag_categories')
export class AgCategories {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
