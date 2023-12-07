import React from 'react';
import Box from './box';

const PaymentInfo = ({ totalItem, totalWeight, weightUnit, shippingCharge, totalItemPrice }) => {
  const totalCharge = Number(shippingCharge) + Number(totalItemPrice);
  return (
    <Box>
      <p>Payment Info</p>
      <div className="flex items-start justify-between mt-2 text-sm sm:text-base">
        <div className="flex items-start gap-10">
          <div className="text-gray-500">
            <p>Sub-total</p>
            <p className="mt-2">Shipping</p>
            <p className="mt-2">Total</p>
          </div>
          <div className="text-gray-500">
            <p>{`${totalItem} Items`}</p>
            <p className="mt-2">{`Expedited (${totalWeight} ${weightUnit})`}</p>
          </div>
        </div>
        <div>
          <p>{`$${totalItemPrice}`}</p>
          <p className="mt-2">{`$${shippingCharge}`}</p>
          <p className="mt-2">{`$${totalCharge}`}</p>
        </div>
      </div>
    </Box>
  );
};

export default PaymentInfo;
