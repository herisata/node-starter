import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_celebrities_on_user_id', ['userId'], { unique: true })
@Index('index_celebrities_on_price_category_id', ['priceCategoryId'], {})
@Index('index_celebrities_on_count_show', ['countShow'], {})
@Entity('celebrities')
export class Celebrities {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('varchar', { name: 'position', nullable: true, length: 191 })
  position: string | null;

  @Column('mediumtext', { name: 'federation_link', nullable: true })
  federationLink: string | null;

  @Column('varchar', { name: 'turned_pro', nullable: true, length: 191 })
  turnedPro: string | null;

  @Column('varchar', { name: 'specificity', nullable: true, length: 191 })
  specificity: string | null;

  @Column('varchar', { name: 'ranking', nullable: true, length: 191 })
  ranking: string | null;

  @Column('int', { name: 'selection', nullable: true })
  selection: number | null;

  @Column('mediumtext', { name: 'use_end_revenues', nullable: true })
  useEndRevenues: string | null;

  @Column('varchar', { name: 'wikipedia', nullable: true, length: 191 })
  wikipedia: string | null;

  @Column('varchar', { name: 'facebook_page', nullable: true, length: 191 })
  facebookPage: string | null;

  @Column('int', { name: 'api_fan_fb', nullable: true, default: () => "'0'" })
  apiFanFb: number | null;

  @Column('varchar', { name: 'twitter', nullable: true, length: 191 })
  twitter: string | null;

  @Column('int', {
    name: 'api_follow_twitter',
    nullable: true,
    default: () => "'0'",
  })
  apiFollowTwitter: number | null;

  @Column('varchar', { name: 'diploma', nullable: true, length: 191 })
  diploma: string | null;

  @Column('varchar', { name: 'diploma2', nullable: true, length: 191 })
  diploma2: string | null;

  @Column('mediumtext', { name: 'diploma3', nullable: true })
  diploma3: string | null;

  @Column('varchar', { name: 'fav_hobby', nullable: true, length: 191 })
  favHobby: string | null;

  @Column('mediumtext', { name: 'most_impo_thing', nullable: true })
  mostImpoThing: string | null;

  @Column('varchar', { name: 'product_cant_live', nullable: true, length: 191 })
  productCantLive: string | null;

  @Column('varchar', { name: 'emotions_lover', nullable: true, length: 191 })
  emotionsLover: string | null;

  @Column('mediumtext', { name: 'best_present', nullable: true })
  bestPresent: string | null;

  @Column('varchar', { name: 'animals', nullable: true, length: 191 })
  animals: string | null;

  @Column('mediumtext', { name: 'causes_pref_assoc', nullable: true })
  causesPrefAssoc: string | null;

  @Column('mediumtext', { name: 'taking_part_assoc', nullable: true })
  takingPartAssoc: string | null;

  @Column('mediumtext', { name: 'fundations', nullable: true })
  fundations: string | null;

  @Column('int', { name: 'load_id', nullable: true })
  loadId: number | null;

  @Column('varchar', { name: 'price_budget', nullable: true, length: 191 })
  priceBudget: string | null;

  @Column('varchar', { name: 'member', nullable: true, length: 191 })
  member: string | null;

  @Column('varchar', { name: 'profile_face', nullable: true, length: 191 })
  profileFace: string | null;

  @Column('varchar', { name: 'avatar_file', nullable: true, length: 191 })
  avatarFile: string | null;

  @Column('int', { name: 'caregiver', nullable: true })
  caregiver: number | null;

  @Column('int', { name: 'creator', nullable: true })
  creator: number | null;

  @Column('int', { name: 'explorer', nullable: true })
  explorer: number | null;

  @Column('int', { name: 'hero', nullable: true })
  hero: number | null;

  @Column('int', { name: 'innocent', nullable: true })
  innocent: number | null;

  @Column('int', { name: 'jester', nullable: true })
  jester: number | null;

  @Column('int', { name: 'lover', nullable: true })
  lover: number | null;

  @Column('int', { name: 'magician', nullable: true })
  magician: number | null;

  @Column('int', { name: 'ordinary', nullable: true })
  ordinary: number | null;

  @Column('int', { name: 'outlaw', nullable: true })
  outlaw: number | null;

  @Column('int', { name: 'ruler', nullable: true })
  ruler: number | null;

  @Column('int', { name: 'sage', nullable: true })
  sage: number | null;

  @Column('varchar', { name: 'phone', nullable: true, length: 191 })
  phone: string | null;

  @Column('varchar', { name: 'mobile', nullable: true, length: 191 })
  mobile: string | null;

  @Column('varchar', { name: 'email', nullable: true, length: 191 })
  email: string | null;

  @Column('varchar', { name: 'skype', nullable: true, length: 191 })
  skype: string | null;

  @Column('varchar', { name: 'fax', nullable: true, length: 191 })
  fax: string | null;

  @Column('varchar', { name: 'state', nullable: true, length: 191 })
  state: string | null;

  @Column('varchar', { name: 'rel_status', nullable: true, length: 191 })
  relStatus: string | null;

  @Column('int', { name: 'nb_son', nullable: true })
  nbSon: number | null;

  @Column('int', { name: 'nb_daughter', nullable: true })
  nbDaughter: number | null;

  @Column('int', { name: 'nb_brother', nullable: true })
  nbBrother: number | null;

  @Column('int', { name: 'nb_sister', nullable: true })
  nbSister: number | null;

  @Column('varchar', { name: 'myspace', nullable: true, length: 191 })
  myspace: string | null;

  @Column('varchar', { name: 'senior_inter', nullable: true, length: 191 })
  seniorInter: string | null;

  @Column('varchar', {
    name: 'championship_level',
    nullable: true,
    length: 191,
  })
  championshipLevel: string | null;

  @Column('varchar', { name: 'university_name', nullable: true, length: 191 })
  universityName: string | null;

  @Column('varchar', { name: 'university_city', nullable: true, length: 191 })
  universityCity: string | null;

  @Column('varchar', { name: 'university_zip', nullable: true, length: 191 })
  universityZip: string | null;

  @Column('varchar', {
    name: 'university_country',
    nullable: true,
    length: 191,
  })
  universityCountry: string | null;

  @Column('varchar', { name: 'university_name2', nullable: true, length: 191 })
  universityName2: string | null;

  @Column('varchar', { name: 'university_city2', nullable: true, length: 191 })
  universityCity2: string | null;

  @Column('varchar', { name: 'university_zip2', nullable: true, length: 191 })
  universityZip2: string | null;

  @Column('varchar', {
    name: 'university_country2',
    nullable: true,
    length: 191,
  })
  universityCountry2: string | null;

  @Column('varchar', { name: 'university_name3', nullable: true, length: 191 })
  universityName3: string | null;

  @Column('varchar', { name: 'university_city3', nullable: true, length: 191 })
  universityCity3: string | null;

  @Column('varchar', { name: 'university_zip3', nullable: true, length: 191 })
  universityZip3: string | null;

  @Column('varchar', {
    name: 'university_country3',
    nullable: true,
    length: 191,
  })
  universityCountry3: string | null;

  @Column('int', { name: 'user_id', unique: true })
  userId: number;

  @Column('int', {
    name: 'price_category_id',
    nullable: true,
    default: () => "'9'",
  })
  priceCategoryId: number | null;

  @Column('varchar', { name: 'step', nullable: true, length: 191 })
  step: string | null;

  @Column('varchar', { name: 'avatar', nullable: true, length: 191 })
  avatar: string | null;

  @Column('varchar', { name: 'availability', nullable: true, length: 191 })
  availability: string | null;

  @Column('tinyint', { name: 'rm_cgu', nullable: true, width: 1 })
  rmCgu: boolean | null;

  @Column('double', {
    name: 'rating',
    nullable: true,
    precision: 22,
    default: () => "'0'",
  })
  rating: number | null;

  @Column('int', {
    name: 'official_api_fan_fb',
    nullable: true,
    default: () => "'0'",
  })
  officialApiFanFb: number | null;

  @Column('varchar', {
    name: 'official_facebook_page',
    nullable: true,
    length: 191,
  })
  officialFacebookPage: string | null;

  @Column('int', { name: 'count_show', nullable: true, default: () => "'0'" })
  countShow: number | null;

  @Column('int', {
    name: 'google_search_count',
    nullable: true,
    default: () => "'0'",
  })
  googleSearchCount: number | null;

  @Column('datetime', { name: 'rating_updated_at', nullable: true })
  ratingUpdatedAt: Date | null;

  @Column('mediumtext', { name: 'google_search', nullable: true })
  googleSearch: string | null;

  @Column('int', {
    name: 'google_news_count',
    nullable: true,
    default: () => "'0'",
  })
  googleNewsCount: number | null;

  @Column('mediumtext', { name: 'keywords_text', nullable: true })
  keywordsText: string | null;

  @Column('tinyint', {
    name: 'official_facebook_bool',
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  officialFacebookBool: boolean | null;

  @Column('int', {
    name: 'google_sr_count',
    nullable: true,
    default: () => "'0'",
  })
  googleSrCount: number | null;

  @Column('int', {
    name: 'google_wr_count',
    nullable: true,
    default: () => "'0'",
  })
  googleWrCount: number | null;

  @Column('int', {
    name: 'google_nr_count',
    nullable: true,
    default: () => "'0'",
  })
  googleNrCount: number | null;

  @Column('double', {
    name: 'google_sr_rating',
    nullable: true,
    precision: 22,
    default: () => "'0'",
  })
  googleSrRating: number | null;

  @Column('double', {
    name: 'google_wr_rating',
    nullable: true,
    precision: 22,
    default: () => "'0'",
  })
  googleWrRating: number | null;

  @Column('double', {
    name: 'google_nr_rating',
    nullable: true,
    precision: 22,
    default: () => "'0'",
  })
  googleNrRating: number | null;

  @Column('double', {
    name: 'google_news_rating',
    nullable: true,
    precision: 22,
    default: () => "'0'",
  })
  googleNewsRating: number | null;

  @Column('datetime', { name: 'google_sr_updated_at', nullable: true })
  googleSrUpdatedAt: Date | null;

  @Column('datetime', { name: 'google_nr_updated_at', nullable: true })
  googleNrUpdatedAt: Date | null;

  @Column('datetime', { name: 'google_wr_updated_at', nullable: true })
  googleWrUpdatedAt: Date | null;

  @Column('datetime', { name: 'google_news_updated_at', nullable: true })
  googleNewsUpdatedAt: Date | null;

  @Column('tinyint', {
    name: 'export_tpc',
    nullable: true,
    width: 1,
    default: () => "'1'",
  })
  exportTpc: boolean | null;

  @Column('int', { name: 'intervention_price_id', nullable: true })
  interventionPriceId: number | null;

  @Column('tinyint', {
    name: 'no_twitter',
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  noTwitter: boolean | null;

  @Column('float', {
    name: 'yahoo_news_rating',
    nullable: true,
    precision: 12,
    default: () => "'0'",
  })
  yahooNewsRating: number | null;

  @Column('int', {
    name: 'yahoo_news_count',
    nullable: true,
    default: () => "'0'",
  })
  yahooNewsCount: number | null;

  @Column('datetime', { name: 'yahoo_news_updated_at', nullable: true })
  yahooNewsUpdatedAt: Date | null;

  @Column('float', {
    name: 'yahoo_web_rating',
    nullable: true,
    precision: 12,
    default: () => "'0'",
  })
  yahooWebRating: number | null;

  @Column('int', {
    name: 'yahoo_web_count',
    nullable: true,
    default: () => "'0'",
  })
  yahooWebCount: number | null;

  @Column('datetime', { name: 'yahoo_web_updated_at', nullable: true })
  yahooWebUpdatedAt: Date | null;

  @Column('float', {
    name: 'global_rating',
    nullable: true,
    precision: 12,
    default: () => "'0'",
  })
  globalRating: number | null;

  @Column('datetime', { name: 'global_rating_updated_at', nullable: true })
  globalRatingUpdatedAt: Date | null;

  @Column('varchar', {
    name: 'status_twitter',
    nullable: true,
    length: 191,
    default: () => "'unfollow'",
  })
  statusTwitter: string | null;

  @Column('varchar', {
    name: 'status_old_tweets',
    nullable: true,
    length: 191,
    default: () => "'waiting'",
  })
  statusOldTweets: string | null;

  @Column('varchar', {
    name: 'ranking_twitter',
    nullable: true,
    length: 191,
    default: () => "'0.00 0.00 0.00 0 0 0 0'",
  })
  rankingTwitter: string | null;

  @Column('datetime', { name: 'last_check_timeline_fb', nullable: true })
  lastCheckTimelineFb: Date | null;

  @Column('varchar', {
    name: 'ranking_facebook',
    nullable: true,
    length: 191,
    default: () => "'0.00 0.00 0.00 0 0 0 0'",
  })
  rankingFacebook: string | null;

  @Column('mediumtext', { name: 'availabilities_detail', nullable: true })
  availabilitiesDetail: string | null;

  @Column('varchar', {
    name: 'radius_intervention',
    nullable: true,
    length: 191,
  })
  radiusIntervention: string | null;

  @Column('tinyint', {
    name: 'speaker',
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  speaker: boolean | null;

  @Column('mediumtext', { name: 'misspelling', nullable: true })
  misspelling: string | null;

  @Column('datetime', { name: 'membered_at', nullable: true })
  memberedAt: Date | null;

  @Column('varchar', { name: 'corporate_name', nullable: true, length: 191 })
  corporateName: string | null;

  @Column('varchar', { name: 'address', nullable: true, length: 191 })
  address: string | null;

  @Column('varchar', { name: 'siret_number', nullable: true, length: 191 })
  siretNumber: string | null;

  @Column('varchar', {
    name: 'legal_representative',
    nullable: true,
    length: 191,
  })
  legalRepresentative: string | null;

  @Column('mediumtext', { name: 'justification', nullable: true })
  justification: string | null;

  @Column('mediumtext', { name: 'nickname', nullable: true })
  nickname: string | null;

  @Column('varchar', { name: 'youtube_channel', nullable: true, length: 191 })
  youtubeChannel: string | null;

  @Column('varchar', { name: 'instagram_name', nullable: true, length: 191 })
  instagramName: string | null;

  @Column('varchar', { name: 'instagram_id', nullable: true, length: 191 })
  instagramId: string | null;

  @Column('int', { name: 'admin_user_id', nullable: true })
  adminUserId: number | null;

  @Column('tinyint', {
    name: 'shell',
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  shell: boolean | null;

  @Column('text', { name: 'uk_themes', nullable: true })
  ukThemes: string | null;
}
