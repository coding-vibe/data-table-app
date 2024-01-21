import renderDateCell from 'utils/renderDateField';

const accountsTableColumns = [
  { id: 'accountId', label: 'Account id', sortable: true, searchable: false },
  { id: 'email', label: 'Email', sortable: true, searchable: true },
  { id: 'authToken', label: 'Auth token', sortable: true, searchable: false },
  {
    id: 'creationDate',
    label: 'Creation date',
    sortable: true,
    searchable: false,
    renderCell: renderDateCell,
  },
];

export default accountsTableColumns;
