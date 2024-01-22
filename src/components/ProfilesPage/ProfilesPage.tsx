import { generatePath, useNavigate, useParams } from 'react-router-dom';
import Breadcrumbs from 'components/Breadcrumbs';
import Table from 'components/Table';
import routes from 'constants/routes';
import profiles from 'fixtures/profiles';
import Profile from 'types/profile';

const breadcrumbs = [
  { title: 'Accounts', path: routes.ACCOUNTS },
  { title: 'Profiles' },
];

const profilesTableColumns = [
  { id: 'profileId', label: 'Profile id', sortable: true, searchable: false },
  { id: 'country', label: 'Country', sortable: true, searchable: true },
  {
    id: 'marketplace',
    label: 'Marketplace',
    sortable: true,
    searchable: true,
  },
];

export default function ProfilesPage() {
  const navigate = useNavigate();
  const { accountId } = useParams();

  const handleRowClick = ({ profileId }: Profile) => {
    const path = generatePath(routes.CAMPAIGNS, { accountId, profileId });

    navigate(path);
  };

  return (
    <div>
      <Breadcrumbs
        className='mb-3'
        items={breadcrumbs}
      />
      <Table<Profile>
        columns={profilesTableColumns}
        data={profiles}
        onRowClick={handleRowClick}
      />
    </div>
  );
}
