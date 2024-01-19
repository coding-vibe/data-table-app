import { format } from 'date-fns';

const DATE_FORMAT = 'dd MMM yy';

const accountsTableColumns = [
  { id: 'accountId', sortable: true, searchable: false },
  { id: 'authToken', sortable: true, searchable: false },
  {
    id: 'creationDate',
    sortable: true,
    searchable: false,
    renderCell: (value: string): string => format(value, DATE_FORMAT),
  },
  { id: 'email', sortable: true, searchable: true },
];

export default accountsTableColumns;
