import React from 'react';
import { ArrowDownFillIcon, ArrowUpFillIcon } from '@/icons';

import Box from './box';
import CircleIcon from './circle-icon';

const OrderStatusCard = ({ title, icon, value, percentage, isPositivePercentage }) => {
  return (
    <Box>
      <div className="flex items-start gap-3">
        <CircleIcon>{icon}</CircleIcon>
        <div>
          <p className="text-gray-600">{title}</p>
          <p className="text-2xl font-semibold">{value}</p>
          <PercentageStatus percentage={percentage} isPositivePercentage={isPositivePercentage} />
        </div>
      </div>
    </Box>
  );
};

export default OrderStatusCard;

const PercentageStatus = ({ isPositivePercentage, percentage }) => {
  const renderIconAndText = (iconColor, arrowIcon, text) => (
    <div className={`flex items-center gap-2 text-${iconColor}`}>
      {arrowIcon && (
        <div>
          {isPositivePercentage ? (
            <ArrowUpFillIcon className="text-2xl" />
          ) : (
            <ArrowDownFillIcon className="text-2xl" />
          )}
        </div>
      )}
      <p>
        {percentage} {text}
      </p>
    </div>
  );

  if (isPositivePercentage && percentage) {
    return renderIconAndText('success-6', true, 'More than avg.');
  }

  if (!isPositivePercentage && percentage) {
    return renderIconAndText('critical-5', true, 'Less than avg.');
  }

  return renderIconAndText('gray-500', false, '--Average');
};
