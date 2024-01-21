import { ReactNode } from 'react';

interface TableColumn {
  id: string;
  label: string;
  sortable?: boolean;
  searchable?: boolean;
  renderCell?: (value: unknown) => ReactNode;
}

export default TableColumn;
