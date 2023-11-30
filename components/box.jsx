import { cn } from '@/lib/utils';
import React, { forwardRef } from 'react';

const Box = forwardRef(({ children, className, style, ...rest }, ref) => {
  return (
    <div
      className={cn('bg-neutral box-border border-gray-200 rounded-xl border p-4', className)}
      style={style}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  );
});

export default Box;
