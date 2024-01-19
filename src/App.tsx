import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'components/Table';
import accountsTableColumns from 'constants/accountsTableColumns';
import accounts from 'fixtures/accounts';
import Account from 'types/account';

export default function App() {
  return (
    <Table<Account>
      data={accounts}
      columns={accountsTableColumns}
    />
  );
}
