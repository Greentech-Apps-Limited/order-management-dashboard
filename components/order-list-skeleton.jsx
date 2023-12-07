import React from 'react';
import { uuidv4 } from '@/lib/utils';
import SkeletonLoader from './skeleton-loader';

const OrderListSkeleton = () => {
  const arrForHeader = new Array(7).fill(0);
  const arrForOrderItem = new Array(4).fill(0);
  return (
    <SkeletonLoader className="my-4 overflow-x-auto border border-gray-200 rounded-xl">
      <table className="w-full text-left text-gray-500 ">
        <thead className="text-sm ">
          <tr>
            {arrForHeader.map(() => (
              <th key={uuidv4()} scope="col" className="p-2 text-sm font-normal text-start ">
                <div label="header skeleton" className="w-32 h-10 bg-gray-300 rounded-lg" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {arrForOrderItem.map(() => {
            return (
              <tr
                key={uuidv4()}
                className="text-gray-800 border-t border-gray-200 text-start rounded-xl"
              >
                {arrForHeader.map(() => (
                  <td key={uuidv4()} className="p-2 text-sm font-normal text-start ">
                    <div label="header skeleton" className="w-32 h-10 bg-gray-300 rounded-lg" />
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </SkeletonLoader>
  );
};

export default OrderListSkeleton;
