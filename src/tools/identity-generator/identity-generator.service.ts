import { fakerEN, fakerVI } from '@faker-js/faker';
import { format } from 'date-fns';

export const IDENTITY_FIELDS = [
  'firstName',
  'lastName',
  'fullName',
  'username',
  'email',
  'phone',
  'gender',
  'birthday',
  'address',
  'city',
  'zip',
  'country',
  'job',
  'company',
  'password',
  'uuid',
  'userAgent',
] as const;

export type IdentityField = typeof IDENTITY_FIELDS[number];
export type IdentityLocale = 'en' | 'vi';
export type Identity = Record<IdentityField, string>;

function slug(value: string) {
  return value
    .replace(/đ/gi, 'd')
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '');
}

function fakerFor(locale: IdentityLocale) {
  return locale === 'vi' ? fakerVI : fakerEN;
}

export function generateIdentity(locale: IdentityLocale, seed?: number): Identity {
  const faker = fakerFor(locale);

  if (seed !== undefined) {
    faker.seed(seed);
  }

  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const firstSlug = slug(firstName) || 'user';
  const lastSlug = slug(lastName) || 'name';
  const suffix = faker.number.int({ min: 10, max: 99 });

  return {
    firstName,
    lastName,
    fullName: locale === 'vi' ? `${lastName} ${firstName}` : `${firstName} ${lastName}`,
    username: `${firstSlug}${lastSlug}${suffix}`,
    email: `${firstSlug}.${lastSlug}${suffix}@${faker.internet.domainName()}`,
    phone: faker.phone.number(),
    gender: faker.person.sex(),
    birthday: format(faker.date.birthdate({ min: 18, max: 75, mode: 'age' }), 'yyyy-MM-dd'),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    zip: faker.location.zipCode(),
    country: faker.location.country(),
    job: faker.person.jobTitle(),
    company: faker.company.name(),
    password: `${firstSlug}${faker.string.alphanumeric(8)}!`,
    uuid: faker.string.uuid(),
    userAgent: faker.internet.userAgent(),
  };
}
