import React from 'react';

import { CUSTOMER_INFO_LABELS } from '@/lib/constants';
import { formatDateTime } from '@/lib/utils';

import Box from './box';
import OrderStatusBadge from './order-status-badge';

const DetailRow = ({ label, value, isFirstItem }) => (
  <div className={`flex gap-3 ${isFirstItem ? '' : 'mt-2'}`}>
    <div className="min-w-[85px] text-gray-500">{label}</div>
    <div>{value}</div>
  </div>
);

const CustomerInfo = ({ customerInfo, orderDetails, paymentStatus }) => {
  return (
    <Box className="flex flex-col items-start justify-between gap-6 text-sm md:text-base md:flex-row">
      <div>
        {Object.keys(CUSTOMER_INFO_LABELS).map((key, index) => (
          <DetailRow
            key={key}
            label={CUSTOMER_INFO_LABELS[key]}
            value={customerInfo[key]}
            isFirstItem={index === 0}
          />
        ))}
      </div>
      <div>
        <DetailRow label="Note" value={customerInfo.customer_note} isFirstItem />
        <DetailRow
          label="Landmark"
          value={`Order Date: ${formatDateTime(orderDetails.created_at)}`}
        />
        <DetailRow label="Payment" value={customerInfo.payment_type} />
        <DetailRow
          label="Status"
          value={<OrderStatusBadge label={paymentStatus.label} variant={paymentStatus.color} />}
        />
      </div>
    </Box>
  );
};

export default CustomerInfo;
