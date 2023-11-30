import Layout from '@/components/layout';
import OrderStatusCard from '@/components/order-status-card';
import { transformOrderData } from '@/lib/utils';

export default function Home() {
  const orderData = {
    new: 125,
    new_percentage: '+10',
    cancelled: 20,
    cancelled_percentage: '+5',
    in_progress: 78,
    pending: 46,
  };

  const modifiedData = transformOrderData(orderData);

  return (
    <main>
      <Layout>
        <div className="p-4">
          <h1 className="text-xl">Overview</h1>
          <div className="grid grid-cols-2">
            <section className="grid grid-cols-2 gap-4 mt-4">
              {modifiedData.map((orderStatus) => {
                const { title, icon, value, percentage, isPositivePercentage } = orderStatus;
                return (
                  <OrderStatusCard
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
