import { faker } from '@faker-js/faker';
import Profile from 'types/profile';
import createFixture from './createFixture';

const DATA_LENGTH = 50;
const ID_LENGTH = 3;

const profiles = createFixture<Profile>(DATA_LENGTH, () => ({
  country: faker.location.country(),
  marketplace: faker.company.name(),
  profileId: faker.string.nanoid(ID_LENGTH),
}));

export default profiles;
