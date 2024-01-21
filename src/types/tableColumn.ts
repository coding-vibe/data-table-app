interface TableColumn {
  id: string;
  label: string;
  sortable?: boolean;
  searchable?: boolean;
  renderCell?: (value: string) => string;
}

export default TableColumn;
