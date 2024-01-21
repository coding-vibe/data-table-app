import { useNavigate, useParams } from 'react-router-dom';
import Table from 'components/Table';
import profilesTableColumns from 'constants/profilesTableColumns';
import profiles from 'fixtures/profiles';
import Profile from 'types/profile';
import routes from 'constants/routes';

export default function ProfileTable() {
  const navigate = useNavigate();
  const { accountId } = useParams();

  const handleRowClick = ({ profileId }: Profile) => {
    navigate(
      `/${routes.ACCOUNTS}/${accountId}/${routes.PROFILES}/${profileId}/${routes.CAMPAIGNS}`,
    );
  };

  return (
    <Table<Profile>
      data={profiles}
      columns={profilesTableColumns}
      onRowClick={handleRowClick}
    />
  );
}
