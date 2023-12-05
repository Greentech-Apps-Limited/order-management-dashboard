import React from 'react';
import { ClockIcon, InProgressOrderIcon, OrderCancelledIcon, UpdatesIcon } from '@/icons';
import { cn, formatDate } from '@/lib/utils';
import Box from './box';
import CircleIcon from './circle-icon';

const OrderUpdates = () => {
  return (
    <Box className="h-[455px]">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-start gap-2 pt-2 pb-3 border-b border-gray-100">
          <UpdatesIcon className="text-lg" />
          <p className="text-gray-500">Updates</p>
        </div>

        <div className="flex-1 overflow-y-auto">
          <UpdateStatus />
          <UpdateStatus />
          <UpdateStatus />
        </div>
      </div>
    </Box>
  );
};

export default OrderUpdates;

const UpdateStatus = () => {
  return (
    <div className="flex gap-4 mt-5">
      <CircleIcon
        className={cn({
          'text-gray-700 text-base': true,
          // 'bg-gray-100': iconBgColor === 'neutral',
          // 'bg-success': iconBgColor === 'success',
          // 'bg-critical': iconBgColor === 'critical',
        })}
      >
        <OrderCancelledIcon />
        {/* {icon} */}
      </CircleIcon>
      <div className="text-gray-800">
        <div className="font-semibold ">
          <u>2433 - Order has been shipped</u>
        </div>
        <p className="my-3">Approved by - Maksudul Hasan</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <InProgressOrderIcon />
            <p>Order- 2433</p>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon />
            <p>{formatDate(1700721482)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
