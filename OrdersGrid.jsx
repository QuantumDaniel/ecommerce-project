import { OrderHeader } from './OrderHeader';
import { OrderDetailsGrid } from './OrderDetailsGrid';
export function OrdersGrid({ orders, BuyagainIcon,loadCart }) {
  return (
    <div className="orders-grid">
      {orders.map((order) => {
        return (
          <div key={order.id} className="order-container">

            <OrderHeader order={order} />

            <OrderDetailsGrid order={order} BuyagainIcon={BuyagainIcon} loadCart = {loadCart} />
          </div>

        );

      })}
    </div>


  );
}