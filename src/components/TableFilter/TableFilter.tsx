import { ChangeEvent } from 'react';
import { Form } from 'react-bootstrap';

interface Props {
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

function TableFilter({ className, onChange, value }: Props) {
  return (
    <Form.Group className={className}>
      <Form.Label>Search</Form.Label>
      <Form.Control
        type='search'
        onChange={onChange}
        value={value}
      />
    </Form.Group>
  );
}

TableFilter.defaultProps = {
  className: null,
};

export default TableFilter;
