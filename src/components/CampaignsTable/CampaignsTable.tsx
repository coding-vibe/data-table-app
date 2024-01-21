import Table from 'components/Table';
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

export default function CampaignsTable() {
  return (
    <Table<Campaign>
      data={campaigns}
      columns={campaignsTableColumns}
    />
  );
}
