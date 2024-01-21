import { generatePath, Link, Outlet, useParams } from 'react-router-dom';
import routes from 'constants/routes';

export default function Layout() {
  const { accountId, profileId } = useParams();

  return (
    <div>
      <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='breadcrumb-item'>
            <Link to={routes.ACCOUNTS}>Accounts</Link>
          </li>
          {accountId && (
            <li className='breadcrumb-item'>
              <Link to={generatePath(routes.PROFILES, { accountId })}>
                Profiles
              </Link>
            </li>
          )}
          {accountId && profileId && (
            <li className='breadcrumb-item'>
              <Link
                to={generatePath(routes.CAMPAIGNS, {
                  accountId,
                  profileId,
                })}>
                Campaigns
              </Link>
            </li>
          )}
        </ol>
      </nav>
      <Outlet />
    </div>
  );
}
