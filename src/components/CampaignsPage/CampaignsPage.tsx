import { generatePath, useParams } from 'react-router-dom';
import Breadcrumbs from 'components/Breadcrumbs';
import Table from 'components/Table';
import routes from 'constants/routes';
import campaigns from 'fixtures/campaigns';
import Campaign from 'types/campaign';
import renderDateCell from 'utils/renderDateField';

const campaignsTableColumns = [
  {
    id: 'campaignsId',
    label: 'Campaign id',
    sortable: true,
    searchable: true,
  },
  { id: 'cost', label: 'Cost', sortable: true, searchable: true },
  { id: 'clicks', label: 'Clicks', sortable: true, searchable: false },
  {
    id: 'date',
    label: 'Date',
    sortable: true,
    searchable: false,
    renderCell: renderDateCell,
  },
];

export default function CampaignsPage() {
  const { profileId, accountId } = useParams();
  const breadcrumbs = [
    { title: 'Accounts', path: routes.ACCOUNTS },
    {
      title: 'Profiles',
      path: generatePath(routes.PROFILES, { accountId, profileId }),
    },
    { title: 'Campaigns' },
  ];

  return (
    <div>
      <Breadcrumbs
        className='mb-3'
        items={breadcrumbs}
      />
      <Table<Campaign>
        columns={campaignsTableColumns}
        data={campaigns}
      />
    </div>
  );
}
