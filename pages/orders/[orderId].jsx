import { getOrderDetails } from '@/apiService';
import Box from '@/components/box';
import DownloadInvoice from '@/components/download-invoice';
import ItemDetails from '@/components/item-details';
import Layout from '@/components/layout';
import OrderStatusBadge from '@/components/order-status-badge';
import { ORDER_STATUS_TYPE, customerInfoLabels } from '@/lib/constants';
import { formatDate } from '@/lib/utils';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const OrderDetails = () => {
  const {
    query: { orderId },
  } = useRouter();

  const [orderDetails, setOrderDetails] = useState({});
  const [orderStatusType, setOrderStatusType] = useState({});
  const [customerInfo, setCustomerInfo] = useState({});
  const [paymentStatus, setPaymentStatus] = useState({});
  const [loading, setLoading] = useState(false);

  const handlePaymentStatus = (details) => {
    if (details.status === ('created' || 'payment_pending' || 'cancelled')) {
      return setPaymentStatus({
        label: 'Unpaid',
        color: 'critical',
      });
    }
    return setPaymentStatus({
      label: 'Paid',
      color: 'success',
    });
  };

  const fetchOrderDetails = async () => {
    setLoading((prev) => ({ ...prev, details: true }));

    try {
      const response = await getOrderDetails(orderId);
      setOrderDetails(response.data);
      setOrderStatusType(ORDER_STATUS_TYPE[response.data.status]);
      setCustomerInfo(response.data.customer);
      handlePaymentStatus(response.data.status);
    } finally {
      setLoading((prev) => ({ ...prev, details: false }));
    }
  };

  useEffect(() => {
    if (orderId) fetchOrderDetails();
  }, [orderId]);

  return (
    <main>
      <Layout>
        <div className="p-4">
          <div className="my-4">
            <h1 className="text-xl">Order Details</h1>
          </div>
          <section>
            <Box className="flex flex-col justify-between gap-4 md:items-center md:flex-row">
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
          <section className="mt-4">
            <Box className="flex flex-col items-start justify-between gap-6 text-sm md:text-base md:flex-row">
              <div>
                {Object.keys(customerInfoLabels).map((key, index) => (
                  <DetailRow
                    key={key}
                    label={customerInfoLabels[key]}
                    value={customerInfo[key]}
                    isFirstItem={index === 0}
                  />
                ))}
              </div>
              <div>
                <DetailRow label="Note" value={customerInfo.customer_note} isFirstItem />
                <DetailRow
                  label="Landmark"
                  value={`Order Date: ${formatDate(orderDetails.created_at)}`}
                />
                <DetailRow label="Payment" value={customerInfo.payment_type} />
                <DetailRow
                  label="Status"
                  value={
                    <OrderStatusBadge label={paymentStatus.label} variant={paymentStatus.color} />
                  }
                />
              </div>
            </Box>
          </section>
          <section className="mt-4">
            <Box>
              <p>Product Details</p>
              <div className="mt-2">
                <ItemDetails itemDetails={orderDetails?.item} />
              </div>
            </Box>
            <Box>
              <p>Product Details</p>
              <div className="mt-2">
                <ItemDetails itemDetails={orderDetails?.item} />
              </div>
            </Box>
          </section>
        </div>
      </Layout>
    </main>
  );
};

export default OrderDetails;

const DetailRow = ({ label, value, isFirstItem }) => (
  <div className={`flex gap-3 ${isFirstItem ? '' : 'mt-2'}`}>
    <div className="min-w-[85px] text-gray-500">{label}</div>
    <div>{value}</div>
  </div>
);
