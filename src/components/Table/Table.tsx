import { ChangeEvent, ReactNode, useEffect, useMemo, useState } from 'react';
import { Table as BootstrapTable } from 'react-bootstrap';
import TableFilter from 'components/TableFilter';
import Paginator from 'components/Paginator';
import INITIAL_PAGE_NUMBER from 'constants/initialPageNumber';
import TableColumn from 'types/tableColumn';
import BaseEntity from 'types/baseEntity';
import SortOrder from 'types/sortOrder';

interface Props<T> {
  columns: TableColumn[];
  data: T[];
  onRowClick?: (row: T) => void;
}

const ITEMS_PER_PAGE = 10;

export default function Table<T extends BaseEntity>({
  columns,
  data,
  onRowClick,
}: Props<T>) {
  const [searchValue, onSearchChange] = useState<string>('');
  const [currentPage, onSelectPage] = useState<number>(INITIAL_PAGE_NUMBER);
  const [sorting, onSetSorting] = useState<{ [key: string]: SortOrder }>({});

  const orderedColumnIds = columns.map(({ id }) => id);
  const searchableFields = columns.reduce<string[]>(
    (acc, { id, searchable }) => (searchable ? [...acc, id] : acc),
    [],
  );
  const sortableFields = columns.reduce<string[]>(
    (acc, { id, sortable }) => (sortable ? [...acc, id] : acc),
    [],
  );

  const handlePageChange = (pageNumber: number) => {
    onSelectPage(pageNumber);
  };
  const handleSortingChange = (id: string) => {
    onSetSorting((prev) => {
      if (id in sorting) {
        return {
          ...prev,
          [id]: prev[id] === SortOrder.ASC ? SortOrder.DESC : SortOrder.ASC,
        };
      }

      return { ...prev, [id]: SortOrder.ASC };
    });
  };
  const handleFilterQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onSearchChange(value);
  };

  const handleFormatValueForFiltering = (value: string) =>
    value.toLowerCase().trim();

  const filteredData = useMemo((): T[] => {
    if (!searchableFields.length) {
      return data;
    }

    const formattedFilterQuery = handleFormatValueForFiltering(searchValue);

    return data.filter((row) =>
      searchableFields.some((field) => {
        const cellValue = row[field];

        // TODO: provide filtering for other types of data via column props
        if (typeof cellValue !== 'string') {
          return true;
        }

        const formattedFieldValue = handleFormatValueForFiltering(cellValue);

        return formattedFieldValue.includes(formattedFilterQuery);
      }),
    );
  }, [data, searchValue, searchableFields]);

  const sortedData = useMemo<T[]>(
    () =>
      sortableFields.reduce<T[]>((acc, sortField) => {
        if (!(sortField in sorting)) {
          return acc;
        }

        const sortOrder = sorting[sortField];

        return acc.sort((a, b) => {
          const valueA = a[sortField];
          const valueB = b[sortField];

          if (typeof valueA === 'number' && typeof valueB === 'number') {
            return sortOrder === SortOrder.ASC
              ? valueA - valueB
              : valueB - valueA;
          }

          if (
            (typeof valueA === 'string' && typeof valueB === 'string') ||
            (valueA instanceof Date && valueB instanceof Date)
          ) {
            if (sortOrder === SortOrder.ASC) {
              return valueA > valueB ? 1 : -1;
            }

            if (sortOrder === SortOrder.DESC) {
              return valueA > valueB ? -1 : 1;
            }
          }

          // TODO: provide sorting for other types of data via column props
          return 0;
        });
      }, filteredData),
    [sortableFields, sorting, filteredData],
  );

  useEffect(() => {
    onSelectPage(INITIAL_PAGE_NUMBER);
  }, [searchValue]);

  const displayedData = useMemo<T[]>(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    return sortedData.slice(startIndex, endIndex);
  }, [currentPage, sortedData]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  return (
    <div>
      {!!searchableFields.length && (
        <TableFilter
          className='mb-3'
          value={searchValue}
          onChange={handleFilterQueryChange}
        />
      )}
      <BootstrapTable
        bordered
        hover
        responsive
        size='sm'
        striped>
        <thead>
          <tr>
            {columns.map(({ id, label, sortable }) => (
              <th key={id}>
                {label}{' '}
                {!!sortable && (
                  <button
                    onClick={() => handleSortingChange(id)}
                    type='button'>
                    {id in sorting && sorting[id]}
                    {!(id in sorting) && 'Sort me'}
                  </button>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayedData.length ? (
            displayedData.map((row) => (
              <tr
                key={row.id}
                onClick={() => onRowClick && onRowClick(row)}>
                {Object.entries(row)
                  .filter(([key]) => orderedColumnIds.includes(key))
                  .sort(
                    ([a], [b]) =>
                      orderedColumnIds.indexOf(a) - orderedColumnIds.indexOf(b),
                  )
                  .map(([key, value], index) => {
                    const renderCell = columns[index]?.renderCell;

                    return (
                      <td key={key}>
                        {renderCell ? renderCell(value) : (value as ReactNode)}
                      </td>
                    );
                  })}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length}>No data found</td>
            </tr>
          )}
        </tbody>
      </BootstrapTable>
      <Paginator
        currentPage={currentPage}
        onPageClick={handlePageChange}
        totalPages={totalPages}
      />
    </div>
  );
}

Table.defaultProps = {
  onRowClick: null,
};
