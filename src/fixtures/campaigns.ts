import { faker } from '@faker-js/faker';
import Campaign from 'types/campaign';
import createFixture from './createFixture';

const DATA_LENGTH = 50;
const ID_LENGTH = 3;
const MAX_YEARS = 10;
const MAX_CLICKS = 50000;

const campaigns = createFixture<Campaign>(DATA_LENGTH, () => ({
  date: faker.date.past({ years: MAX_YEARS }),
  campaignsId: faker.string.nanoid(ID_LENGTH),
  clicks: faker.number.int({ max: MAX_CLICKS }),
  cost: faker.finance.amount(),
}));

export default campaigns;
