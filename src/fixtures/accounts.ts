import { faker } from '@faker-js/faker';
import Account from 'types/account';
import createFixture from './createFixture';

const DATA_LENGTH = 50;
const ID_LENGTH = 3;

const accounts = createFixture<Account>(DATA_LENGTH, () => ({
  accountId: faker.string.nanoid(ID_LENGTH),
  authToken: faker.string.uuid(),
  creationDate: faker.date.past(),
  email: faker.internet.email(),
}));

export default accounts;
