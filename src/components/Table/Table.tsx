import { Table as BootstrapTable } from 'react-bootstrap';
import TableColumn from 'types/tableColumn';
import convertToSentenceCase from 'utils/convertToSentenceCase';

interface Props<T> {
  data: T[];
  columns: TableColumn[];
  // onRowClick: (row: T) => void;
}

export default function Table<T extends object>({ data, columns }: Props<T>) {
  const foundedColumn = (columns: TableColumn[], key: string) =>
    columns.find((column) => column.id === key);

  return (
    <BootstrapTable
      bordered
      hover
      responsive
      variant='dark'
      size='sm'
      striped>
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key}>{convertToSentenceCase(key)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          // eslint-disable-next-line react/no-array-index-key
          <tr key={rowIndex}>
            {Object.entries(row).map(([key, value]) => (
              <td key={key}>
                {foundedColumn(columns, key)?.renderCell
                  ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                    foundedColumn(columns, key)?.renderCell(value)
                  : value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </BootstrapTable>
  );
}
