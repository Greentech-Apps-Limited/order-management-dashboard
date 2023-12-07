import React from 'react';

import { cn } from '@/lib/utils';
import { REVIEW_STAT_TYPE } from '@/lib/constants';

import Box from './box';
import CircleIcon from './circle-icon';

const StatItem = ({ icon, label, value, iconBgColor }) => {
  return (
    <div className="flex items-center h-full gap-4 md:gap-0 md:items-start md:flex-col ">
      <CircleIcon
        className={cn({
          'text-gray-700 ': true,
          'bg-gray-100': iconBgColor === 'neutral',
          'bg-success': iconBgColor === 'success',
          'bg-critical': iconBgColor === 'critical',
        })}
      >
        {icon}
      </CircleIcon>
      <div>
        <p className="my-2 text-sm text-gray-600">{label}</p>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </div>
  );
};

const CustomerSatisfaction = ({ feedbackData = {} }) => {
  return (
    <Box className="h-full">
      <p>Customer satisfaction</p>
      <div className="flex flex-col justify-between h-full gap-4 p-4 mt-2 sm:flex-row ">
        {Object.keys(feedbackData).map((element, index) => {
          const type = REVIEW_STAT_TYPE[element];
          return (
            <React.Fragment key={type.label}>
              <StatItem
                icon={type.icon}
                label={type.label}
                value={feedbackData[element]}
                iconBgColor={type.color}
              />
              {index < Object.keys(feedbackData).length - 1 && (
                <div className="hidden md:block w-[1px] h-20 bg-gray-100" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </Box>
  );
};

export default CustomerSatisfaction;
