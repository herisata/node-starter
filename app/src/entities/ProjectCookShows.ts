import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CookShowCategories } from './CookShowCategories';

@Index('index_project_cook_shows_on_agency_id', ['agencyId'], {})
@Index('index_project_cook_shows_on_cook_show_category_id', ['cookShowCategoryId'], {})
@Index('index_project_cook_shows_on_admin_user_id', ['adminUserId'], {})
@Entity('project_cook_shows')
export class ProjectCookShows {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('int', { name: 'agency_id', nullable: true })
  agencyId: number | null;

  @Column('varchar', { name: 'aasm_state', nullable: true, length: 191 })
  aasmState: string | null;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name: string | null;

  @Column('mediumtext', { name: 'description', nullable: true })
  description: string | null;

  @Column('int', { name: 'cook_show_category_id', nullable: true })
  cookShowCategoryId: number | null;

  @Column('int', { name: 'admin_user_id', nullable: true })
  adminUserId: number | null;

  @Column('varchar', { name: 'client_name', nullable: true, length: 191 })
  clientName: string | null;

  @Column('tinyint', { name: 'tender', nullable: true, width: 1 })
  tender: boolean | null;

  @Column('tinyint', { name: 'public', nullable: true, width: 1 })
  public: boolean | null;

  @Column('varchar', { name: 'budget', nullable: true, length: 191 })
  budget: string | null;

  @Column('varchar', { name: 'room_name', nullable: true, length: 191 })
  roomName: string | null;

  @Column('varchar', { name: 'address', nullable: true, length: 191 })
  address: string | null;

  @Column('varchar', { name: 'city', nullable: true, length: 191 })
  city: string | null;

  @Column('varchar', { name: 'zip_code', nullable: true, length: 191 })
  zipCode: string | null;

  @Column('varchar', { name: 'country', nullable: true, length: 191 })
  country: string | null;

  @Column('varchar', {
    name: 'participant_number',
    nullable: true,
    length: 191,
  })
  participantNumber: string | null;

  @Column('int', { name: 'women_ratio', nullable: true })
  womenRatio: number | null;

  @Column('mediumtext', { name: 'priority_comment', nullable: true })
  priorityComment: string | null;

  @Column('varchar', { name: 'other_objective', nullable: true, length: 191 })
  otherObjective: string | null;

  @Column('mediumtext', { name: 'date_comment', nullable: true })
  dateComment: string | null;

  @Column('varchar', { name: 'kitchen_worktop', nullable: true, length: 191 })
  kitchenWorktop: string | null;

  @Column('varchar', { name: 'cooking_tools', nullable: true, length: 191 })
  cookingTools: string | null;

  @Column('varchar', {
    name: 'cooking_ingredients',
    nullable: true,
    length: 191,
  })
  cookingIngredients: string | null;

  @Column('varchar', { name: 'caterer', nullable: true, length: 191 })
  caterer: string | null;

  @Column('varchar', { name: 'participant_space', nullable: true, length: 191 })
  participantSpace: string | null;

  @Column('varchar', { name: 'microphone', nullable: true, length: 191 })
  microphone: string | null;

  @Column('varchar', { name: 'big_screen', nullable: true, length: 191 })
  bigScreen: string | null;

  @ManyToOne(() => CookShowCategories, (cookShowCategories) => cookShowCategories.projectCookShows, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'cook_show_category_id', referencedColumnName: 'id' }])
  cookShowCategory: CookShowCategories;
}
