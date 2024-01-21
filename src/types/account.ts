import BaseEntity from './baseEntity';

interface Account extends BaseEntity {
  accountId: string;
  authToken: string;
  creationDate: Date;
  email: string;
}

export default Account;
