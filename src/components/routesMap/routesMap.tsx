import { createBrowserRouter } from 'react-router-dom';
import Layout from 'components/Layout';
import AccountsTable from 'components/AccountsTable';
import CampaignsTable from 'components/CampaignsTable';
import ProfilesTable from 'components/ProfilesTable';
import routes from 'constants/routes';

const routesMap = createBrowserRouter(
  [
    {
      path: routes.ROOT,
      element: <Layout />,
      children: [
        {
          element: <AccountsTable />,
          path: routes.ACCOUNTS,
        },
        {
          element: <ProfilesTable />,
          path: `/${routes.ACCOUNTS}/:accountId/${routes.PROFILES}`,
        },
        {
          element: <CampaignsTable />,
          path: `/${routes.ACCOUNTS}/:accountId/${routes.PROFILES}/:profileId/${routes.CAMPAIGNS}`,
        },
      ],
    },
  ],
  { basename: '/data-table-app/' },
);

export default routesMap;
