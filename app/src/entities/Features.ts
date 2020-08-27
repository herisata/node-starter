import { Column, Entity, Index } from 'typeorm';

@Index('index_features_on_application', ['application'], {})
@Entity('features')
export class Features {
  @Column('varchar', { primary: true, name: 'name', length: 191 })
  name: string;

  @Column('varchar', { name: 'application', length: 191 })
  application: string;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;
}
