import { getOrderStatistics, getOrderUpdates } from '@/apiService';
import CustomerSatisfaction from '@/components/customer-satisfaction';
import CustomerSatisfactionSkeleton from '@/components/customer-satisfaction-skeleton';
import Layout from '@/components/layout';
import OrderList from '@/components/order-list';
import OrderStatusCard from '@/components/order-status-card';
import OrderStatusCardSkeleton from '@/components/order-status-card-skeleton';
import OrderUpdates from '@/components/order-updates';
import OrderUpdatesSkeleton from '@/components/order-updates-skeleton';
import { transformOrderData } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function Home() {
  const [orderStat, setOrderState] = useState([]);
  const [feedbackData, setFeedbackData] = useState({});
  const [orderUpdates, setOrderUpdates] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchStatistics = async () => {
    setLoading((prev) => ({ ...prev, stats: true }));

    try {
      const response = await getOrderStatistics();
      const { order, customer } = response.data;
      const modifiedData = transformOrderData(order);
      setOrderState(modifiedData);
      setFeedbackData(customer);
    } finally {
      setLoading((prev) => ({ ...prev, stats: false }));
    }
  };

  const fetchUpdates = async () => {
    setLoading((prev) => ({ ...prev, updates: true }));

    try {
      const response = await getOrderUpdates();
      setOrderUpdates(response.data);
    } finally {
      setLoading((prev) => ({ ...prev, updates: false }));
    }
  };

  useEffect(() => {
    fetchStatistics();
    fetchUpdates();
  }, []);

  return (
    <main>
      <Layout>
        <div className="p-4">
          <h1 className="text-xl">Overview</h1>
          <div className="grid grid-cols-1 gap-4 mt-4 xl:grid-cols-2">
            <div className="xl:order-1">
              {loading.stats ? (
                <OrderStatusCardSkeleton />
              ) : (
                <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {orderStat.map((orderStatus) => {
                    const { title, icon, value, percentage, isPositivePercentage } = orderStatus;
                    return (
                      <OrderStatusCard
                        key={orderStatus.title}
                        title={title}
                        icon={icon}
                        value={value}
                        percentage={percentage}
                        isPositivePercentage={isPositivePercentage}
                      />
                    );
                  })}
                </section>
              )}
            </div>

            <div className="xl:order-3">
              {loading.stats ? (
                <CustomerSatisfactionSkeleton />
              ) : (
                <CustomerSatisfaction feedbackData={feedbackData} />
              )}
            </div>
            <div className="row-span-2 xl:order-2">
              {loading.updates ? (
                <OrderUpdatesSkeleton />
              ) : (
                <OrderUpdates orderUpdates={orderUpdates} />
              )}
            </div>
          </div>
          <div className="w-full my-4 overflow-hidden">
            <OrderList />
          </div>
        </div>
      </Layout>
    </main>
  );
}
