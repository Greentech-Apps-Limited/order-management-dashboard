import {
  BoxIcon,
  CustomersIcon,
  DashboardIcon,
  HeadphoneIcon,
  InventoryIcon,
  InvoiceIcon,
  ProfileIcon,
  SettingsIcon,
} from '@/icons';

// FIXME: Remove disable option after creating all routes.
export const SIDENAV_ITEMS = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <DashboardIcon className="text-2xl" />,
  },
  {
    title: 'Order',
    path: '/orders',
    icon: <BoxIcon className="text-2xl" />,
    submenu: true,
    subMenuItems: [
      { title: 'New', path: '/orders/new' },
      { title: 'Pending', path: '/orders/pending', disabled: true },
      { title: 'In Progress', path: '/orders/in-progress', disabled: true },
      { title: 'Completed', path: '/orders/completed', disabled: true },
    ],
  },
  {
    title: 'Inventory',
    path: '/inventory',
    icon: <InventoryIcon className="text-2xl" />,
    disabled: true,
  },
  {
    title: 'Invoices',
    path: '/invoices',
    icon: <InvoiceIcon className="text-2xl" />,
    disabled: true,
  },
  {
    title: 'Customers',
    path: '/customers',
    icon: <CustomersIcon className="text-2xl" />,
    disabled: true,
  },
  { divider: true },
  {
    title: 'Profile',
    path: '/profile',
    icon: <ProfileIcon className="text-2xl" />,
    disabled: true,
  },
  {
    title: 'Help center',
    path: '/help-center',
    icon: <HeadphoneIcon className="text-2xl" />,
    disabled: true,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <SettingsIcon className="text-2xl" />,
    disabled: true,
  },
];
