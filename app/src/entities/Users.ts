import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_users_on_email', ['email'], { unique: true })
@Index('index_users_on_reset_password_token', ['resetPasswordToken'], {
  unique: true,
})
@Index('index_users_on_authentication_token', ['authenticationToken'], {
  unique: true,
})
@Index('index_users_on_confirmation_token', ['confirmationToken'], {
  unique: true,
})
@Index('index_users_on_activation_token', ['activationToken'], { unique: true })
@Index('index_users_on_current_sign_in_at', ['currentSignInAt'], {})
@Entity('users')
export class Users {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'email', unique: true, length: 191 })
  email: string;

  @Column('varchar', { name: 'unconfirmed_email', nullable: true, length: 191 })
  unconfirmedEmail: string | null;

  @Column('varchar', { name: 'encrypted_password', length: 128 })
  encryptedPassword: string;

  @Column('varchar', {
    name: 'reset_password_token',
    nullable: true,
    unique: true,
    length: 191,
  })
  resetPasswordToken: string | null;

  @Column('datetime', { name: 'reset_password_sent_at', nullable: true })
  resetPasswordSentAt: Date | null;

  @Column('datetime', { name: 'remember_created_at', nullable: true })
  rememberCreatedAt: Date | null;

  @Column('int', {
    name: 'sign_in_count',
    nullable: true,
    default: () => "'0'",
  })
  signInCount: number | null;

  @Column('datetime', { name: 'current_sign_in_at', nullable: true })
  currentSignInAt: Date | null;

  @Column('datetime', { name: 'last_sign_in_at', nullable: true })
  lastSignInAt: Date | null;

  @Column('varchar', {
    name: 'current_sign_in_ip',
    nullable: true,
    length: 191,
  })
  currentSignInIp: string | null;

  @Column('varchar', { name: 'last_sign_in_ip', nullable: true, length: 191 })
  lastSignInIp: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('varchar', { name: 'role', length: 191 })
  role: string;

  @Column('varchar', { name: 'locale', nullable: true, length: 191 })
  locale: string | null;

  @Column('mediumtext', { name: 'other_emails', nullable: true })
  otherEmails: string | null;

  @Column('varchar', {
    name: 'authentication_token',
    nullable: true,
    unique: true,
    length: 191,
  })
  authenticationToken: string | null;

  @Column('varchar', {
    name: 'validation_status',
    nullable: true,
    length: 191,
    default: () => "'unvalid'",
  })
  validationStatus: string | null;

  @Column('varchar', {
    name: 'creation_type',
    nullable: true,
    length: 191,
    default: () => "'manual'",
  })
  creationType: string | null;

  @Column('tinyint', { name: 'mail_subscribed', nullable: true, width: 1 })
  mailSubscribed: boolean | null;

  @Column('varchar', {
    name: 'confirmation_token',
    nullable: true,
    unique: true,
    length: 191,
  })
  confirmationToken: string | null;

  @Column('datetime', { name: 'confirmation_sent_at', nullable: true })
  confirmationSentAt: Date | null;

  @Column('datetime', { name: 'confirmed_at', nullable: true })
  confirmedAt: Date | null;

  @Column('tinyint', {
    name: 'limited_access',
    nullable: true,
    width: 1,
    default: () => "'1'",
  })
  limitedAccess: boolean | null;

  @Column('varchar', { name: 'sf_contact_id', nullable: true, length: 191 })
  sfContactId: string | null;

  @Column('varchar', { name: 'sf_lead_id', nullable: true, length: 191 })
  sfLeadId: string | null;

  @Column('varchar', { name: 'user_type', nullable: true, length: 191 })
  userType: string | null;

  @Column('tinyint', {
    name: 'onboarding',
    nullable: true,
    width: 1,
    default: () => "'1'",
  })
  onboarding: boolean | null;

  @Column('bigint', { name: 'terms_signatures', default: () => "'0'" })
  termsSignatures: string;

  @Column('varchar', {
    name: 'activation_token',
    nullable: true,
    unique: true,
    length: 191,
  })
  activationToken: string | null;

  @Column('datetime', { name: 'activation_sent_at', nullable: true })
  activationSentAt: Date | null;

  @Column('datetime', { name: 'activated_at', nullable: true })
  activatedAt: Date | null;

  @Column('tinyint', {
    name: 'require_password_change',
    width: 1,
    default: () => "'0'",
  })
  requirePasswordChange: boolean;
}
