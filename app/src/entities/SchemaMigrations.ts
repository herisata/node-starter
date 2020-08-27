import { Column, Entity, Index } from 'typeorm';

@Index('unique_schema_migrations', ['version'], { unique: true })
@Entity('schema_migrations')
export class SchemaMigrations {
  @Column('varchar', { primary: true, name: 'version', length: 191 })
  version: string;
}
