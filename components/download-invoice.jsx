import { DownloadIcon } from '@/icons';
import React from 'react';

const DownloadInvoice = () => {
  return (
    <div>
      <button
        type="button"
        className="flex items-center gap-1 px-2 py-2 rounded-full w-max text-neutral bg-primary-8"
      >
        <DownloadIcon className="text-2xl" />
        <p className="text-sm font-semibold">Download Invoice</p>
      </button>
    </div>
  );
};

export default DownloadInvoice;
