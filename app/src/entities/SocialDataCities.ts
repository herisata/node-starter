import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_social_data_cities_on_social_data_id', ['socialDataId'], {
  unique: true,
})
@Entity('social_data_cities')
export class SocialDataCities {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('int', { name: 'social_data_id', unique: true })
  socialDataId: number;

  @Column('varchar', { name: 'social_data_location', length: 191 })
  socialDataLocation: string;

  @Column('text', { name: 'google_response', nullable: true })
  googleResponse: string | null;
}
