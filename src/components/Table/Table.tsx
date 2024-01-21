import { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { Table as BootstrapTable } from 'react-bootstrap';
import { faker } from '@faker-js/faker';
import TableColumn from 'types/tableColumn';

interface Props<T> {
  columns: TableColumn[];
  data: T[];
  onRowClick?: (row: T) => void;
}

const ITEMS_PER_PAGE = 10;
export default function Table<T extends object>({
  columns,
  data,
  onRowClick,
}: Props<T>) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const columnsOrder = columns.map(({ id }) => id);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const displayedData = data.slice(startIndex, endIndex);
  const getColumnByKey = (columns: TableColumn[], key: string): TableColumn => {
    const foundColumn = columns.find((column) => column.id === key);
    if (foundColumn) {
      return foundColumn;
    }
    throw new Error(`Column "${key}" not found`);
  };
  // const sortBy = (key) => {
  //   data.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  // };

  return (
    <div>
      <BootstrapTable
        bordered
        hover
        responsive
        size='sm'
        striped>
        <thead>
          <tr>
            {columns.map(({ id, label }) => (
              <th key={id}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayedData.map((row) => (
            <tr
              key={faker.string.nanoid()}
              onClick={() => onRowClick && onRowClick(row)}>
              {Object.entries(row)
                .filter(([key]) => columnsOrder.includes(key))
                .sort(
                  ([a], [b]) =>
                    columnsOrder.indexOf(a) - columnsOrder.indexOf(b),
                )
                .map(([key, value]) => (
                  <td key={key}>
                    {getColumnByKey(columns, key)?.renderCell
                      ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                        getColumnByKey(columns, key)?.renderCell(value)
                      : value}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </BootstrapTable>
      <Pagination>
        <Pagination.First
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        />
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {Array.from({ length: totalPages }, (_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
        <Pagination.Last
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </div>
  );
}

Table.defaultProps = {
  onRowClick: null,
};
