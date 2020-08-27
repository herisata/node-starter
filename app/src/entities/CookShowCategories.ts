import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProjectCookShows } from './ProjectCookShows';

@Entity('cook_show_categories')
export class CookShowCategories {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'label', nullable: true, length: 191 })
  label: string | null;

  @OneToMany(() => ProjectCookShows, (projectCookShows) => projectCookShows.cookShowCategory)
  projectCookShows: ProjectCookShows[];
}
