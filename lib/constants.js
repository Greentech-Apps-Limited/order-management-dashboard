import {
  BoxIcon,
  CancelledOrderIcon,
  CustomersIcon,
  DashboardIcon,
  DontTouchIcon,
  HeadphoneIcon,
  InProgressOrderIcon,
  InventoryIcon,
  InvoiceIcon,
  NewOrderIcon,
  OrderCancelledIcon,
  OrderCreatedIcon,
  OrderShippedIcon,
  PendingOrderIcon,
  ProfileIcon,
  SettingsIcon,
  UserFullViewIcon,
  VictoryFingerIcon,
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

export const ORDER_STATISTIC_TYPES = {
  new: {
    title: 'New Orders',
    icon: <NewOrderIcon />,
  },
  cancelled: {
    title: 'Cancelled order',
    icon: <CancelledOrderIcon />,
  },
  in_progress: {
    title: 'In Progress',
    icon: <InProgressOrderIcon />,
  },
  pending: {
    title: 'Pending',
    icon: <PendingOrderIcon />,
  },
};

export const REVIEW_STAT_TYPE = {
  total_review: {
    label: 'Total reviewed',
    icon: <UserFullViewIcon className="text-base" />,
    color: 'neutral',
  },
  positive: {
    label: 'Positive feedback',
    icon: <VictoryFingerIcon className="text-base" />,
    color: 'success',
  },
  negative: {
    label: 'Negative feedback',
    icon: <DontTouchIcon className="text-base" />,
    color: 'critical',
  },
};

export const ORDER_STATUS_TYPE = {
  created: {
    label: 'Order created',
    icon: <OrderCreatedIcon className="text-base" />,
    badgeTitle: 'Created',
    color: 'success',
    actionBy: 'Created by -',
  },
  payment_pending: {
    label: 'Order confirmed, waiting for payment',
    badgeTitle: 'Payment Pending',
    color: 'critical',
  },
  paid: {
    label: 'Payment done',
    badgeTitle: 'Paid',
    color: 'success',
  },
  shipped: {
    label: 'Order has been shipped',
    badgeTitle: 'Shipped',
    icon: <OrderShippedIcon className="text-base" />,
    color: 'primary',
    actionBy: 'Approved by -',
  },
  cancelled: {
    label: 'Order has been cancelled',
    badgeTitle: 'Cancelled',
    icon: <OrderCancelledIcon className="text-base" />,
    color: 'critical',
    actionBy: 'Cancelled by -',
  },
  delivered: {
    label: 'Order has been delivered',
    badgeTitle: 'Delivered',
    color: 'success',
  },
};

export const customerInfoLabels = {
  name: 'Name',
  email: 'Email',
  phone: 'Mobile',
  address: 'Address',
  city: 'City',
};
