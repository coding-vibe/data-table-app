import { Link } from 'react-router-dom';
import routes from 'constants/routes';
import * as classes from './styles';

export default function NotFoundPage() {
  return (
    <div>
      <p
        className='lead'
        css={classes.text}>
        This page doesn&apos;t exist. Go to{' '}
        <Link to={routes.ROOT}>Accounts page</Link>
      </p>
      <img
        alt='404ErrorImage'
        css={classes.img}
        src={`${import.meta.env.BASE_URL}404_error.jpg`}
      />
    </div>
  );
}
