import axios from 'axios';
import { useEffect, useState } from 'react'
import { CheckoutHeader } from './CheckoutHeader'
import './CheckoutPage.css'
import { PaymentSummary } from './PaymentSummary';
import { OrderSummary } from './OrderSummary';
export function CheckoutPage({ cart,loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState([null]);
  useEffect(() => {
    const fetchCheckOutData = async () => {
      let response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime'
      );
      setDeliveryOptions(response.data);
    }
    fetchCheckOutData();
  }, []);

  useEffect(()=>{
    const fetchCheckOutData = async ()=>{
      const response = await axios.get('/api/payment-summary')
      setPaymentSummary(response.data);
    }
    fetchCheckOutData(); 
    
  },[cart])
  
  window.axios = axios;

  return (
    <>
      <title>Checkout</title>
      <CheckoutHeader cart ={cart} />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart = {loadCart} />
          <PaymentSummary loadCart = {loadCart} paymentSummary={paymentSummary} />
        </div>
      </div>
      <link rel="icon" type="image/svg+xml" href="/cart-favicon.png" />
    </>
  );
}