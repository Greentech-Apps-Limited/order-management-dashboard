import React from 'react';
import { ArrowDownFillIcon, ArrowUpFillIcon } from '@/icons';
import { cn } from '@/lib/utils';

import Box from './box';
import CircleIcon from './circle-icon';

const PercentageStatus = ({ isPositivePercentage, percentage, isCancelledType }) => {
  const renderIconAndText = (arrowIcon, text) => (
    <div
      className={cn({
        'flex items-center gap-2': true,
        'text-success-6': isPositivePercentage && percentage && !isCancelledType,
        'text-critical-5': (!isPositivePercentage || isCancelledType) && percentage,
        'text-gray-500': !percentage,
      })}
    >
      {arrowIcon && (
        <div>
          {isPositivePercentage ? (
            <ArrowUpFillIcon className="text-2xl" />
          ) : (
            <ArrowDownFillIcon className="text-2xl" />
          )}
        </div>
      )}
      <p className="text-sm">
        {percentage} {text}
      </p>
    </div>
  );

  if (percentage) {
    return renderIconAndText(true, isPositivePercentage ? 'More than avg.' : 'Less than avg.');
  }

  return renderIconAndText(false, '--Average');
};

const OrderStatisticCard = ({
  title,
  icon,
  value,
  percentage,
  isPositivePercentage,
  isCancelledType,
}) => {
  return (
    <Box>
      <div className="flex items-start gap-3">
        <CircleIcon>{icon}</CircleIcon>
        <div>
          <p className="text-gray-600">{title}</p>
          <p className="text-2xl font-semibold">{value}</p>
          <PercentageStatus
            percentage={percentage}
            isPositivePercentage={isPositivePercentage}
            isCancelledType={isCancelledType}
          />
        </div>
      </div>
    </Box>
  );
};

export default OrderStatisticCard;
