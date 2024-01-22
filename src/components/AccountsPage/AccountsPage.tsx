import { useNavigate, generatePath } from 'react-router-dom';
import Breadcrumbs from 'components/Breadcrumbs';
import Table from 'components/Table';
import routes from 'constants/routes';
import accounts from 'fixtures/accounts';
import Account from 'types/account';
import renderDateCell from 'utils/renderDateField';

const accountsTableColumns = [
  { id: 'accountId', label: 'Account id', sortable: true, searchable: false },
  { id: 'email', label: 'Email', sortable: true, searchable: true },
  { id: 'authToken', label: 'Auth token', sortable: true, searchable: false },
  {
    id: 'creationDate',
    label: 'Creation date',
    sortable: true,
    searchable: false,
    renderCell: renderDateCell,
  },
];

const breadcrumbs = [{ title: 'Accounts' }];

export default function AccountsPage() {
  const navigate = useNavigate();

  const handleRowClick = ({ accountId }: Account) => {
    const path = generatePath(routes.PROFILES, { accountId });
    navigate(path);
  };

  return (
    <div>
      <Breadcrumbs
        className='mb-3'
        items={breadcrumbs}
      />
      <Table<Account>
        data={accounts}
        columns={accountsTableColumns}
        onRowClick={handleRowClick}
      />
    </div>
  );
}
