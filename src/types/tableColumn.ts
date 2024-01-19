interface TableColumn {
  id: string;
  sortable: boolean;
  searchable: boolean;
  renderCell?: (value: string) => string;
}

export default TableColumn;
