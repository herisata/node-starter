import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_agencies_on_user_id', ['userId'], { unique: true })
@Index('index_agencies_on_ag_category_id', ['agCategoryId'], {})
@Index('index_agencies_on_company_id', ['companyId'], {})
@Index('index_agencies_on_salesforce_account_id', ['salesforceAccountId'], {})
@Entity('agencies')
export class Agencies {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'last_name', nullable: true, length: 191 })
  lastName: string | null;

  @Column('varchar', { name: 'first_name', nullable: true, length: 191 })
  firstName: string | null;

  @Column('varchar', { name: 'company_name', nullable: true, length: 191 })
  companyName: string | null;

  @Column('varchar', { name: 'logo', nullable: true, length: 191 })
  logo: string | null;

  @Column('varchar', { name: 'position_title', nullable: true, length: 191 })
  positionTitle: string | null;

  @Column('varchar', { name: 'phone', nullable: true, length: 191 })
  phone: string | null;

  @Column('varchar', { name: 'mobile', nullable: true, length: 191 })
  mobile: string | null;

  @Column('varchar', { name: 'fax', nullable: true, length: 191 })
  fax: string | null;

  @Column('varchar', { name: 'skype', nullable: true, length: 191 })
  skype: string | null;

  @Column('varchar', { name: 'address1', nullable: true, length: 191 })
  address1: string | null;

  @Column('varchar', { name: 'address2', nullable: true, length: 191 })
  address2: string | null;

  @Column('varchar', { name: 'city', nullable: true, length: 191 })
  city: string | null;

  @Column('varchar', { name: 'zip_code', nullable: true, length: 191 })
  zipCode: string | null;

  @Column('varchar', { name: 'country', nullable: true, length: 191 })
  country: string | null;

  @Column('varchar', { name: 'website', nullable: true, length: 191 })
  website: string | null;

  @Column('tinyint', { name: 'budget_food', nullable: true, width: 1 })
  budgetFood: boolean | null;

  @Column('tinyint', { name: 'budget_animal_food', nullable: true, width: 1 })
  budgetAnimalFood: boolean | null;

  @Column('tinyint', {
    name: 'budget_furniture_appliances',
    nullable: true,
    width: 1,
  })
  budgetFurnitureAppliances: boolean | null;

  @Column('tinyint', { name: 'budget_car', nullable: true, width: 1 })
  budgetCar: boolean | null;

  @Column('tinyint', {
    name: 'budget_banking_insurance',
    nullable: true,
    width: 1,
  })
  budgetBankingInsurance: boolean | null;

  @Column('tinyint', { name: 'budget_alcool', nullable: true, width: 1 })
  budgetAlcool: boolean | null;

  @Column('tinyint', { name: 'budget_drink', nullable: true, width: 1 })
  budgetDrink: boolean | null;

  @Column('tinyint', { name: 'budget_diy_gardening', nullable: true, width: 1 })
  budgetDiyGardening: boolean | null;

  @Column('tinyint', {
    name: 'budget_shopping_center',
    nullable: true,
    width: 1,
  })
  budgetShoppingCenter: boolean | null;

  @Column('tinyint', { name: 'budget_candy', nullable: true, width: 1 })
  budgetCandy: boolean | null;

  @Column('tinyint', { name: 'budget_cosmetic', nullable: true, width: 1 })
  budgetCosmetic: boolean | null;

  @Column('tinyint', { name: 'budget_beauty', nullable: true, width: 1 })
  budgetBeauty: boolean | null;

  @Column('tinyint', {
    name: 'budget_maintenance_car',
    nullable: true,
    width: 1,
  })
  budgetMaintenanceCar: boolean | null;

  @Column('tinyint', { name: 'budget_humanitarian', nullable: true, width: 1 })
  budgetHumanitarian: boolean | null;

  @Column('tinyint', {
    name: 'budget_computer_office',
    nullable: true,
    width: 1,
  })
  budgetComputerOffice: boolean | null;

  @Column('tinyint', { name: 'budget_gambling', nullable: true, width: 1 })
  budgetGambling: boolean | null;

  @Column('tinyint', { name: 'budget_toys', nullable: true, width: 1 })
  budgetToys: boolean | null;

  @Column('tinyint', { name: 'budget_culture', nullable: true, width: 1 })
  budgetCulture: boolean | null;

  @Column('tinyint', { name: 'budget_fashion', nullable: true, width: 1 })
  budgetFashion: boolean | null;

  @Column('tinyint', { name: 'budget_internet', nullable: true, width: 1 })
  budgetInternet: boolean | null;

  @Column('tinyint', { name: 'budget_drugstore', nullable: true, width: 1 })
  budgetDrugstore: boolean | null;

  @Column('tinyint', {
    name: 'budget_photo_video_audio',
    nullable: true,
    width: 1,
  })
  budgetPhotoVideoAudio: boolean | null;

  @Column('tinyint', { name: 'budget_telecom', nullable: true, width: 1 })
  budgetTelecom: boolean | null;

  @Column('tinyint', { name: 'budget_press_media', nullable: true, width: 1 })
  budgetPressMedia: boolean | null;

  @Column('tinyint', { name: 'budget_cleaning', nullable: true, width: 1 })
  budgetCleaning: boolean | null;

  @Column('tinyint', { name: 'budget_dairy', nullable: true, width: 1 })
  budgetDairy: boolean | null;

  @Column('tinyint', { name: 'budget_restoration', nullable: true, width: 1 })
  budgetRestoration: boolean | null;

  @Column('tinyint', { name: 'budget_heal', nullable: true, width: 1 })
  budgetHeal: boolean | null;

  @Column('tinyint', { name: 'budget_utilities', nullable: true, width: 1 })
  budgetUtilities: boolean | null;

  @Column('tinyint', { name: 'budget_sport', nullable: true, width: 1 })
  budgetSport: boolean | null;

  @Column('tinyint', { name: 'budget_tobacco', nullable: true, width: 1 })
  budgetTobacco: boolean | null;

  @Column('tinyint', {
    name: 'budget_tourism_transport',
    nullable: true,
    width: 1,
  })
  budgetTourismTransport: boolean | null;

  @Column('tinyint', { name: 'budget_tv', nullable: true, width: 1 })
  budgetTv: boolean | null;

  @Column('tinyint', { name: 'budget_others', nullable: true, width: 1 })
  budgetOthers: boolean | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('varchar', { name: 'brands', nullable: true, length: 191 })
  brands: string | null;

  @Column('int', { name: 'ag_category_id', nullable: true })
  agCategoryId: number | null;

  @Column('int', { name: 'user_id', unique: true })
  userId: number;

  @Column('varchar', { name: 'avatar', nullable: true, length: 191 })
  avatar: string | null;

  @Column('varchar', { name: 'load_id', nullable: true, length: 191 })
  loadId: string | null;

  @Column('varchar', { name: 'step', nullable: true, length: 191 })
  step: string | null;

  @Column('tinyint', { name: 'budget_energy', nullable: true, width: 1 })
  budgetEnergy: boolean | null;

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

  @Column('int', { name: 'admin_user_id', nullable: true })
  adminUserId: number | null;

  @Column('varchar', { name: 'company_url', nullable: true, length: 191 })
  companyUrl: string | null;

  @Column('tinyint', {
    name: 'onboarding_read',
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  onboardingRead: boolean | null;

  @Column('int', { name: 'company_id', nullable: true })
  companyId: number | null;

  @Column('varchar', { name: 'sf_id', nullable: true, length: 191 })
  sfId: string | null;

  @Column('int', { name: 'salesforce_account_id', nullable: true })
  salesforceAccountId: number | null;
}
