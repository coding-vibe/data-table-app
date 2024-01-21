import { Link } from 'react-router-dom';
import * as classes from './styles';

export default function NotFoundPage() {
  return (
    <div>
      <p
        className='lead'
        css={classes.text}>
        This page doesn&apos;t exist. Go <Link to='/'>home</Link>
      </p>
      <img
        alt='404ErrorImage'
        css={classes.img}
        src='404_error.jpg'
      />
    </div>
  );
}
