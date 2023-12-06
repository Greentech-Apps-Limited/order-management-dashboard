import React from 'react';
import Image from 'next/image';
import { BoxRegularIcon, WeightIcon } from '@/icons';
import Checkbox from './checkbox';
import OrderStatusBadge from './order-status-badge';

const OrderList = () => {
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
    <div className="w-full overflow-hidden">
      <h2 className="text-xl">Order Summary</h2>
      <div className="overflow-x-auto border border-gray-200 shadow-md sm:rounded-lg">
        <table className="w-full text-left text-gray-500 bg-neutral ">
          <thead className="text-sm border-b border-gray-200">
            <tr>
              <th scope="col" className="p-2">
                <Checkbox label="Select all" />
              </th>
              {tableHeadTitle.map((title) => (
                <th key={title} scope="col" className="p-2 text-sm font-normal text-start">
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <OrderItem />
            <OrderItem />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;

const OrderItem = () => {
  return (
    <tr className="text-gray-800 border-b text-start hover:bg-gray">
      <td className="p-2 ">
        <Checkbox label="Select item" />
      </td>
      <td className="p-2">4320</td>
      <td className="p-2">
        <ItemShortDetails label="Item short details" />
      </td>
      <td className="p-2">T-shirt</td>
      <td className="p-2">1000</td>
      <td className="p-2">5.2 (Ibs)</td>
      <td className="p-2">
        <OrderStatusBadge label="Pre-production" />
      </td>
      <td className="p-2">25 Nov,2023</td>
    </tr>
  );
};

const ItemShortDetails = () => {
  return (
    <div className="flex items-center gap-3">
      <Image src="/images/bag.png" width={48} height={48} />
      <div>
        <p>B&B Half sleeve T-shirt</p>
        <div className="text-sm text-gray-500">
          <p>SKU 36336389</p>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-start gap-0.5">
              <BoxRegularIcon />
              <p>1.2 X 1.2 X 1.2</p>
            </div>
            <div className="flex items-center justify-start gap-0.5">
              <WeightIcon />
              <p>0.2 (lbs)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
