import { format } from 'date-fns';
import DATE_FORMAT from './dateFormat';

const campaignsTableColumns = [
  {
    id: 'campaignsId',
    label: 'Campaign id',
    sortable: true,
    searchable: false,
  },
  { id: 'cost', label: 'Cost', sortable: true, searchable: false },
  { id: 'clicks', label: 'Clicks', sortable: true, searchable: false },
  {
    id: 'date',
    label: 'Date',
    sortable: true,
    searchable: true,
    renderCell: (value: string): string => format(value, DATE_FORMAT),
  },
];

export default campaignsTableColumns;
