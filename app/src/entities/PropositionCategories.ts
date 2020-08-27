import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_proposition_categories_on_name', ['name'], {})
@Index(
  'index_prop_categories_on_prop_categoriesable_type_id',
  ['propositionCategoriesableType', 'propositionCategoriesableId'],
  {},
)
@Entity('proposition_categories')
export class PropositionCategories {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name: string | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;

  @Column('int', { name: 'proposition_categoriesable_id', nullable: true })
  propositionCategoriesableId: number | null;

  @Column('varchar', {
    name: 'proposition_categoriesable_type',
    nullable: true,
    length: 191,
  })
  propositionCategoriesableType: string | null;
}
