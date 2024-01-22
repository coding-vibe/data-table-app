import Breadcrumbs from 'components/Breadcrumbs';
import Table from 'components/Table';
import routes from 'constants/routes';
import campaigns from 'fixtures/campaigns';
import Campaign from 'types/campaign';
import renderDateCell from 'utils/renderDateField';

const breadcrumbs = [
  { title: 'Accounts', path: routes.ACCOUNTS },
  { title: 'Profiles', path: routes.PROFILES },
  { title: 'Campaigns' },
];

const campaignsTableColumns = [
  {
    id: 'campaignsId',
    label: 'Campaign id',
    sortable: true,
    searchable: true,
  },
  { id: 'cost', label: 'Cost', sortable: true, searchable: false },
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
