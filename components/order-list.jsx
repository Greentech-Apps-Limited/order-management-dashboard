import React from 'react';
import { formatDate } from '@/lib/utils';
import { ORDER_STATUS_TYPE } from '@/lib/constants';
import { useRouter } from 'next/router';
import Checkbox from './checkbox';
import OrderStatusBadge from './order-status-badge';
import ItemDetails from './item-details';

const OrderList = ({ orders }) => {
  const tableHeadTitle = [
    'Order no.',
    'Item Details',
    'Package type',
    'Qty.',
    'Weight',
    'Status',
    'Expected Delivery date',
  ];
  return (
    <div className="w-full">
      <div className="my-4 overflow-x-auto border border-gray-200 rounded-xl">
        <table className="w-full text-left text-gray-500 bg-neutral">
          <thead className="text-sm ">
            <tr>
              <th scope="col" className="p-2 w-max">
                <Checkbox label="Select all" />
              </th>
              {tableHeadTitle.map((title) => (
                <th key={title} scope="col" className="p-2 text-sm font-normal text-start ">
                  <div className="min-w-max"> {title}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              return <OrderItem key={order.id} order={order} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;

const OrderItem = ({ order }) => {
  const statusType = ORDER_STATUS_TYPE[order.status];
  const { push } = useRouter();
  const handleNavigation = () => {
    push(`/orders/${order.id}`);
  };
  return (
    <tr
      onClick={handleNavigation}
      className="text-gray-800 border-t border-gray-200 cursor-pointer text-start hover:bg-gray rounded-xl"
    >
      <td className="p-2 min-w-max">
        <Checkbox label="Select item" />
      </td>
      <td className="p-2">
        <div className="min-w-max"> {order.id}</div>
      </td>
      <td className="p-2 min-w-max">
        <ItemDetails itemDetails={order.item} label="Item short details" isShortDetails />
      </td>
      <td className="p-2">
        <div className="min-w-max">{order.item.type}</div>
      </td>
      <td className="p-2">
        <div className="min-w-max"> {order.total_quantity}</div>
      </td>
      <td className="p-2">
        <div className="min-w-max"> {`${order.total_weight} (${order.unit})`} </div>
      </td>
      <td className="p-2">
        <OrderStatusBadge label={statusType.badgeTitle} variant={statusType.color} />
      </td>
      <td className="p-2">
        <div className="min-w-max"> {formatDate(order.expected_delivery_date, false)}</div>
      </td>
    </tr>
  );
};