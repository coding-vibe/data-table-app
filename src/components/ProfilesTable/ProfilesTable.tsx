import { generatePath, useNavigate, useParams } from 'react-router-dom';
import Table from 'components/Table';
import profiles from 'fixtures/profiles';
import Profile from 'types/profile';
import routes from 'constants/routes';

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

export default function ProfileTable() {
  const navigate = useNavigate();
  const { accountId } = useParams();

  const handleRowClick = ({ profileId }: Profile) => {
    const path = generatePath(routes.CAMPAIGNS, { accountId, profileId });

    navigate(path);
  };

  return (
    <Table<Profile>
      data={profiles}
      columns={profilesTableColumns}
      onRowClick={handleRowClick}
    />
  );
}
