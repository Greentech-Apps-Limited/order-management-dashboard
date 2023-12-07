import { getOrderDetails } from '@/apiService';
import Box from '@/components/box';
import DownloadInvoice from '@/components/download-invoice';
import Layout from '@/components/layout';
import OrderStatusBadge from '@/components/order-status-badge';
import { ORDER_STATUS_TYPE } from '@/lib/constants';
import { formatDate } from '@/lib/utils';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const OrderDetails = () => {
  const {
    query: { orderId },
  } = useRouter();

  const [orderDetails, setOrderDetails] = useState({});
  const [orderStatusType, setOrderStatusType] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchOrderDetails = async () => {
    setLoading((prev) => ({ ...prev, details: true }));

    try {
      const response = await getOrderDetails(orderId);
      setOrderDetails(response.data);
      setOrderStatusType(ORDER_STATUS_TYPE[response.data.status]);
    } finally {
      setLoading((prev) => ({ ...prev, details: false }));
    }
  };

  useEffect(() => {
    if (orderId) fetchOrderDetails();
  }, [orderId]);

  console.log(orderStatusType);
  return (
    <main>
      <Layout>
        <div className="p-4">
          <div className="my-4">
            <h1 className="text-xl">Order Details</h1>
          </div>
          <section>
            <Box className="flex items-center justify-between" x>
              <div>
                <p className="text-lg text-gray-700">{`Order ID: ${orderDetails.id}`}</p>
                <p className="my-2 text-gray-600">{`Order Date: ${formatDate(
                  orderDetails.created_at
                )}`}</p>
                <OrderStatusBadge
                  label={orderStatusType.badgeTitle}
                  variant={orderStatusType.color}
                />
              </div>
              <DownloadInvoice />
            </Box>
          </section>
        </div>
      </Layout>
    </main>
  );
};

export default OrderDetails;
