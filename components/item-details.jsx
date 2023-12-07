import { BoxRegularIcon, WeightIcon } from '@/icons';
import Image from 'next/image';
import React from 'react';

const ItemDetails = ({ itemDetails = {}, isShortDetails = false }) => {
  const imageSize = isShortDetails ? { width: 48, height: 48 } : { width: 80, height: 80 };
  const labelClassName = isShortDetails ? 'text-sm text-gray-500' : 'text-gray-500';

  return (
    <div className="flex items-center gap-3">
      <Image
        src={`/images/${itemDetails?.image}`}
        alt={itemDetails?.name}
        className="rounded"
        quality={100}
        {...imageSize}
      />
      <div>
        <p>{isShortDetails ? itemDetails?.name : `Name: ${itemDetails?.name}`}</p>
        <div className={labelClassName}>
          <p className={isShortDetails ? '' : 'my-2'}>
            {isShortDetails ? `SKU ${itemDetails?.sku}` : `Tracking ID: SKU ${itemDetails?.sku}`}
          </p>
          <div className="flex items-center gap-2 w-max">
            <div className="flex items-center justify-start gap-0.5">
              <BoxRegularIcon />
              <p>{itemDetails?.dimension}</p>
            </div>
            <div className="flex items-center justify-start gap-0.5">
              <WeightIcon />
              <p>{`${itemDetails?.weight} (${itemDetails?.weight_unit})`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
