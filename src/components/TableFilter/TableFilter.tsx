import { ChangeEvent } from 'react';
import { Form } from 'react-bootstrap';
import * as classes from './styles';

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  className?: string;
}

export default function TableFilter({ onChange, value, className }: Props) {
  return (
    <Form.Group
      className={className}
      controlId='search-table-group'
      css={classes.wrap}>
      <Form.Label>Search</Form.Label>
      <Form.Control
        onChange={onChange}
        type='search'
        value={value}
      />
    </Form.Group>
  );
}

TableFilter.defaultProps = {
  className: null,
};
