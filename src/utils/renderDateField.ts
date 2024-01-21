import DATE_FORMAT from 'constants/dateFormat';
import { format } from 'date-fns';
import TableColumn from 'types/tableColumn';

const renderDateCell: TableColumn['renderCell'] = (value: unknown): string => {
  if (!(value instanceof Date)) {
    throw new Error('Not a date');
  }

  return format(value, DATE_FORMAT);
};

export default renderDateCell;
