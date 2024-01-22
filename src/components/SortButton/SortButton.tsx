import Button from 'react-bootstrap/Button';
import { Filter, SortDown, SortUp } from 'react-bootstrap-icons';
import SortOrder from 'types/sortOrder';

interface Props {
  onClick: () => void;
  className?: string;
  sorting?: SortOrder;
}

export default function SortButton({ onClick, className, sorting }: Props) {
  return (
    <Button
      className={className}
      onClick={onClick}
      variant='light'>
      {sorting === SortOrder.ASC && <SortUp />}
      {sorting === SortOrder.DESC && <SortDown />}
      {!sorting && <Filter />}
    </Button>
  );
}

SortButton.defaultProps = {
  className: null,
  sorting: null,
};
