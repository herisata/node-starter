import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('project_animation_types')
export class ProjectAnimationTypes {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'label', nullable: true, length: 191 })
  label: string | null;

  @Column('tinyint', {
    name: 'default',
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  default: boolean | null;
}
