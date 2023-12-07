import { ArrowLeftIcon } from '@/icons';
import { useRouter } from 'next/router';
import React from 'react';

const BackButton = () => {
  const { back } = useRouter();
  return (
    <button
      type="button"
      className=""
      onClick={() => {
        back();
      }}
      aria-label="Back button"
    >
      <ArrowLeftIcon className="text-2xl" />
    </button>
  );
};

export default BackButton;
