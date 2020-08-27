import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_intervention_tags_on_ancestry', ['ancestry'], {})
@Entity('intervention_tags')
export class InterventionTags {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name_fr', nullable: true, length: 191 })
  nameFr: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('varchar', { name: 'ancestry', nullable: true, length: 191 })
  ancestry: string | null;

  @Column('mediumtext', { name: 'path_en', nullable: true })
  pathEn: string | null;

  @Column('mediumtext', { name: 'path_fr', nullable: true })
  pathFr: string | null;

  @Column('varchar', { name: 'name_en', nullable: true, length: 191 })
  nameEn: string | null;
}
