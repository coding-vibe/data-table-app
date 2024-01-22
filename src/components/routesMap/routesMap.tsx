import { createHashRouter, Navigate } from 'react-router-dom';
import Layout from 'components/Layout';
import AccountsPage from 'components/AccountsPage';
import CampaignsTable from 'components/CampaignsPage';
import ProfilesPage from 'components/ProfilesPage';
import routes from 'constants/routes';
import NotFoundPage from 'components/NotFoundPage';

const routesMap = createHashRouter([
  {
    element: <Layout />,
    path: routes.ROOT,
    children: [
      {
        element: <Navigate to={routes.ACCOUNTS} />,
        path: routes.ROOT,
      },
      {
        element: <AccountsPage />,
        path: routes.ACCOUNTS,
      },
      {
        element: <ProfilesPage />,
        path: routes.PROFILES,
      },
      {
        element: <CampaignsTable />,
        path: routes.CAMPAIGNS,
      },
      {
        element: <NotFoundPage />,
        path: '*',
      },
    ],
  },
]);

export default routesMap;
