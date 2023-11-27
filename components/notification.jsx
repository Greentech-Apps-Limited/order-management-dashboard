import { NotificationIcon } from '@/icons';
import React from 'react';

const Notification = () => {
  return (
    <div>
      <button
        type="button"
        aria-label="Notification"
        className="p-2 rounded-full bg-gray hover:bg-gray-200"
      >
        <NotificationIcon className="text-2xl" />
      </button>
    </div>
  );
};

export default Notification;
