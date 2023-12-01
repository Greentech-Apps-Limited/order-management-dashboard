import { getOrderStatistics } from '@/apiService';
import CustomerSatisfaction from '@/components/customer-satisfaction';
import Layout from '@/components/layout';
import OrderStatusCard from '@/components/order-status-card';
import OrderStatusCardSkeleton from '@/components/order-status-card-skeleton';
import OrderUpdates from '@/components/order-updates';
import { transformOrderData } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function Home() {
  const [orderStat, setOrderState] = useState([]);
  const [feedbackData, setFeedBackData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchStatistics() {
      setLoading(true);
      try {
        const response = await getOrderStatistics();
        const { order, customer } = response.data;
        const modifiedData = transformOrderData(order);
        setOrderState(modifiedData);
        setFeedBackData(customer);
      } finally {
        setLoading(false);
      }
    }
    fetchStatistics();
  }, []);

  return (
    <main>
      <Layout>
        <div className="p-4">
          <h1 className="text-xl">Overview</h1>
          <div className="grid grid-cols-1 gap-4 mt-4 xl:grid-cols-2">
            <div className="xl:order-1">
              {loading ? (
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
              <CustomerSatisfaction feedbackData={feedbackData} />
            </div>
            <div className="xl:order-2">
              <OrderUpdates />
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
