import { Outlet } from 'react-router-dom';
import * as classes from './styles';

export default function Layout() {
  return (
    <div css={classes.wrap}>
      <Outlet />
    </div>
  );
}
