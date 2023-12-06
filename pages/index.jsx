import { useEffect, useState } from 'react';

import { transformOrderData } from '@/lib/utils';

import { getOrderStatistics } from '@/apiService';

import Layout from '@/components/layout';
import OrderStatisticCard from '@/components/order-statistic-card';
import OrderStatisticCardSkeleton from '@/components/order-statistic-card-skeleton';

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
              <OrderStatisticCardSkeleton />
            ) : (
              <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                {orderStatistics.map((orderStatistic) => {
                  const { title, icon, value, percentage, isPositivePercentage } = orderStatistic;
                  return (
                    <OrderStatisticCard
                      key={orderStatistic.title}
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
