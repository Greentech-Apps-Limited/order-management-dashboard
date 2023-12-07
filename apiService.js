import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    Accept: 'application/json',
  },
});

export default api;

export const getOrderStatistics = () => {
  return api.get(`/statistics`);
};
export const getOrderUpdates = () => {
  return api.get(`/updates`);
};
export const getOrderList = () => {
  return api.get(`/orders`);
};
export const getOrderDetails = (id) => {
  return api.get(`/orders/${id}`);
};
