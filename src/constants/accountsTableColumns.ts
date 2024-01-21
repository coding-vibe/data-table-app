import { format } from 'date-fns';
import DATE_FORMAT from './dateFormat';

const accountsTableColumns = [
  { id: 'accountId', label: 'Account id', sortable: true, searchable: false },
  { id: 'email', label: 'Email', sortable: true, searchable: true },
  { id: 'authToken', label: 'Auth token', sortable: true, searchable: false },
  {
    id: 'creationDate',
    label: 'Creation date',
    sortable: true,
    searchable: false,
    renderCell: (value: string): string => format(value, DATE_FORMAT),
  },
];

export default accountsTableColumns;
