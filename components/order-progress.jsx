import React from 'react';
import { ORDER_STATUS_TYPE } from '@/lib/constants';
import { BulletActiveIcon, BulletIcon } from '@/icons';
import { formatDateTime } from '@/lib/utils';

import Box from './box';

const OrderProgress = ({ orderDetails }) => {
  return (
    <Box>
      <p>Order Progress / Status</p>
      <div className="px-4 py-2 my-2 bg-gray-100 rounded">
        <p>Timeline</p>
      </div>
      <div>
        {Object.keys(ORDER_STATUS_TYPE).map((statusKey) => {
          if (statusKey !== 'cancelled') {
            const status = ORDER_STATUS_TYPE[statusKey];
            let timestampValue;

            if (statusKey === 'payment_pending') {
              timestampValue = orderDetails?.confirmed_at;
            } else {
              timestampValue = orderDetails[`${statusKey}_at`];
            }
            return (
              <div className="flex items-center gap-4 mt-6" key={statusKey}>
                <div>{timestampValue ? <BulletActiveIcon /> : <BulletIcon />}</div>
                <div className="flex justify-between text-sm grow">
                  <div className="text-gray-500">{status.label}</div>
                  <div>{timestampValue ? formatDateTime(timestampValue) : ''}</div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </Box>
  );
};

export default OrderProgress;
