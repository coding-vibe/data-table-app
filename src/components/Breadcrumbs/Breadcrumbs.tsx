import BootstrapBreadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

interface Props {
  items: {
    title: string;
    path?: string;
  }[];
  className?: string;
}

export default function Breadcrumbs({ items, className }: Props) {
  return (
    <BootstrapBreadcrumb className={className}>
      {items.map((item) =>
        item.path ? (
          <BootstrapBreadcrumb.Item
            className='h6 lead'
            key={item.title}
            linkAs={Link}
            linkProps={{ to: item.path }}>
            {item.title}
          </BootstrapBreadcrumb.Item>
        ) : (
          <BootstrapBreadcrumb.Item
            active
            className='h6 lead'
            key={item.title}>
            {item.title}
          </BootstrapBreadcrumb.Item>
        ),
      )}
    </BootstrapBreadcrumb>
  );
}

Breadcrumbs.defaultProps = {
  className: null,
};
