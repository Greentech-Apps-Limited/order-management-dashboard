import React from 'react';
import { ClockIcon, InProgressOrderIcon, UpdatesIcon } from '@/icons';
import { cn, formatDate, uuidv4 } from '@/lib/utils';
import { ORDER_STATUS_TYPE } from '@/lib/constants';
import Box from './box';
import CircleIcon from './circle-icon';

const UpdateStatus = ({ orderUpdate = {} }) => {
  const orderStatusType = ORDER_STATUS_TYPE[orderUpdate?.status] ?? {};
  const { label, icon, color, actionBy } = orderStatusType;

  return (
    <div className="flex flex-col gap-4 mt-5 md:flex-row">
      <CircleIcon
        className={cn({
          'text-gray-700 text-base': true,
          'bg-gray-100': color === 'neutral',
          'bg-success': color === 'success',
          'bg-critical': color === 'critical',
        })}
      >
        {icon}
      </CircleIcon>
      <div className="text-gray-800">
        <div className="font-semibold ">
          <u>{`${orderUpdate.order_id} - ${label}`}</u>
        </div>
        {actionBy && <p className="my-3">{`${actionBy} ${orderUpdate.approved_by}`}</p>}
        <div className="flex flex-col justify-start gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <InProgressOrderIcon />
            <p>Order- {orderUpdate.order_id}</p>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon />
            <p>{formatDate(orderUpdate.updated_at)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const OrderUpdates = ({ orderUpdates = [] }) => {
  return (
    <Box className="h-[455px]">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-start gap-2 pt-2 pb-3 border-b border-gray-100">
          <UpdatesIcon className="text-lg" />
          <p className="text-gray-500">Updates</p>
        </div>

        <div className="flex-1 overflow-y-auto">
          {orderUpdates.map((update) => (
            <UpdateStatus key={uuidv4()} orderUpdate={update} />
          ))}
        </div>
      </div>
    </Box>
  );
};

export default OrderUpdates;
