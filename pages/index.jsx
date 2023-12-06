import { getOrderStatistics } from '@/apiService';
import Layout from '@/components/layout';
import OrderStatusCard from '@/components/order-status-card';
import OrderStatusCardSkeleton from '@/components/order-status-card-skeleton';
import { transformOrderData } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function Home() {
  const [orderStatistics, setOrderStatistics] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchStatistics() {
      setLoading(true);
      try {
        const response = await getOrderStatistics();
        const { order } = response.data;
        const modifiedData = transformOrderData(order);
        setOrderStatistics(modifiedData);
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
            {loading ? (
              <OrderStatusCardSkeleton />
            ) : (
              <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                {orderStatistics.map((orderStatus) => {
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
        </div>
      </Layout>
    </main>
  );
}
