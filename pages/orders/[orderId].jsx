import { getOrderDetails } from '@/apiService';
import Layout from '@/components/layout';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const OrderDetails = () => {
  const {
    query: { orderId },
  } = useRouter();

  const [orderDetails, setOrderDetails] = useState();
  const [loading, setLoading] = useState(false);

  const fetchOrderDetails = async () => {
    setLoading((prev) => ({ ...prev, details: true }));

    try {
      const response = await getOrderDetails(orderId);
      setOrderDetails(response.data);
    } finally {
      setLoading((prev) => ({ ...prev, details: false }));
    }
  };

  useEffect(() => {
    if (orderId) fetchOrderDetails();
  }, [orderId]);

  return (
    <main>
      <Layout>Order details</Layout>
    </main>
  );
};

export default OrderDetails;
