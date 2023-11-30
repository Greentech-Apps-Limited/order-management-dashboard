import { getOrderStatistics } from '@/apiService';
import Layout from '@/components/layout';
import OrderStatusCard from '@/components/order-status-card';
import { transformOrderData } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function Home() {
  const [orderStat, setOrderState] = useState([]);
  const [customerReviewData, setCustomerReviewData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchStatistics() {
      setLoading(true);
      try {
        const response = await getOrderStatistics();
        const { order, customer } = response.data;
        const modifiedData = transformOrderData(order);
        setOrderState(modifiedData);
        setCustomerReviewData(customer);
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
          <div className="grid grid-cols-2">
            <section className="grid grid-cols-2 gap-4 mt-4">
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
          </div>
        </div>
      </Layout>
    </main>
  );
}
