import React from 'react';
import Image from 'next/image';
import Box from './box';

const OrderLocationTrack = () => {
  return (
    <Box>
      <p>Live Tracking</p>
      <div className="relative mt-2 overflow-hidden rounded-xl min-h-[260px]">
        <Image
          src="/images/map.png"
          alt="Map Image"
          priority
          fill
          quality={100}
          style={{ objectFit: 'cover' }}
        />
      </div>
    </Box>
  );
};

export default OrderLocationTrack;
