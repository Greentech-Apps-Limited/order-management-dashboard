import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { getOrderDetails } from '@/apiService';

import Box from '@/components/box';
import DownloadInvoice from '@/components/download-invoice';
import ItemDetails from '@/components/item-details';
import Layout from '@/components/layout';
import OrderLocationTrack from '@/components/order-location-track';
import OrderProgress from '@/components/order-progress';
import OrderStatusBadge from '@/components/order-status-badge';
import PaymentInfo from '@/components/payment-info';
import { ORDER_STATUS_TYPE } from '@/lib/constants';
import { formatDate } from '@/lib/utils';
import CustomerInfo from '@/components/customer-info';
import SkeletonLoader from '@/components/skeleton-loader';
import CustomerInfoSkeleton from '@/components/customer-info-skeleton';
import BackButton from '@/components/back-button';

const OrderDetails = () => {
  const {
    query: { orderId },
  } = useRouter();

  const [orderDetails, setOrderDetails] = useState({});
  const [orderStatusType, setOrderStatusType] = useState({});
  const [customerInfo, setCustomerInfo] = useState({});
  const [paymentStatus, setPaymentStatus] = useState({});
  const [loading, setLoading] = useState({ details: true });

  const handlePaymentStatus = (status) => {
    const unpaidStatuses = ['created', 'payment_pending', 'cancelled'];
    if (unpaidStatuses.includes(status)) {
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
          <div className="flex items-center gap-2">
            <BackButton />
            <h1 className="text-xl">Order Details</h1>
          </div>
          <section className="mt-4">
            {loading.details ? (
              <SkeletonLoader className="h-[128px]" />
            ) : (
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
            )}
          </section>
          <section className="mt-4">
            {loading.details ? (
              <CustomerInfoSkeleton />
            ) : (
              <CustomerInfo
                customerInfo={customerInfo}
                orderDetails={orderDetails}
                paymentStatus={paymentStatus}
              />
            )}
          </section>
          <section className="grid grid-cols-1 gap-4 mt-4 xl:grid-cols-12">
            <div className="xl:col-span-7 ">
              {loading.details ? (
                <SkeletonLoader className="h-[152px]" />
              ) : (
                <Box>
                  <p>Product Details</p>
                  <div className="mt-2">
                    <ItemDetails itemDetails={orderDetails?.item} />
                  </div>
                </Box>
              )}
            </div>

            <div className="xl:col-span-5 ">
              {loading.details ? (
                <SkeletonLoader className="h-[152px]" />
              ) : (
                <PaymentInfo
                  totalItem={orderDetails.total_quantity}
                  totalWeight={orderDetails.total_weight}
                  weightUnit={orderDetails.item?.weight_unit}
                  shippingCharge={orderDetails.shipping_charge}
                  totalItemPrice={orderDetails.total_amount}
                />
              )}
            </div>
            <div className="xl:col-span-7 ">
              {loading.details ? (
                <SkeletonLoader className="h-[444px]" />
              ) : (
                <OrderProgress orderDetails={orderDetails} />
              )}
            </div>
            <div className="xl:col-span-5">
              {loading.details ? <SkeletonLoader className="h-[444px]" /> : <OrderLocationTrack />}
            </div>
          </section>
        </div>
      </Layout>
    </main>
  );
};

export default OrderDetails;
