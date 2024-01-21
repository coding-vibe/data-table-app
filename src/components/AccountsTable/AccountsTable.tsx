import { useNavigate } from 'react-router-dom';
import Table from 'components/Table';
import accountsTableColumns from 'constants/accountsTableColumns';
import accounts from 'fixtures/accounts';
import Account from 'types/account';
import routes from 'constants/routes';

export default function AccountsTable() {
  const navigate = useNavigate();

  const handleRowClick = ({ accountId }: Account) => {
    navigate(`/${routes.ACCOUNTS}/${accountId}/${routes.PROFILES}`);
  };

  return (
    <Table<Account>
      data={accounts}
      columns={accountsTableColumns}
      onRowClick={handleRowClick}
    />
  );
}
