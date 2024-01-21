import Table from 'components/Table';
import campaignsTableColumns from 'constants/campaignsTableColumns';
import campaigns from 'fixtures/campaigns';
import Campaign from 'types/campaign';

export default function CampaignsTable() {
  return (
    <Table<Campaign>
      data={campaigns}
      columns={campaignsTableColumns}
    />
  );
}
