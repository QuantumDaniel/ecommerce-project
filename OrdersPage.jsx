import axios from 'axios';
import { useState, useEffect } from 'react';
import './OrdersPage.css';
import { Header } from '../../components/header';
import BuyagainIcon from '../../assets/images/icons/buy-again.png';
import { OrdersGrid } from './OrdersGrid';
export function OrdersPage({ cart,loadCart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrderData = async () => {
      const response = await axios.get('/api/orders?expand=products')
      setOrders(response.data);
    };
    getOrderData();


  }, []);
  return (
    <>
      <title>Orders</title>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>
        <OrdersGrid BuyagainIcon={BuyagainIcon} orders={orders} loadCart = {loadCart} />
      </div>
      <link rel="icon" type="image/svg+xml" href="/orders-favicon.png" />
    </>

  );
}