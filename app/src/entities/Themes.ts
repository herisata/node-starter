import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_themes_on_parent_id', ['parentId'], {})
@Entity('themes')
export class Themes {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'label', nullable: true, length: 191 })
  label: string | null;

  @Column('int', { name: 'parent_id', nullable: true })
  parentId: number | null;
}
