import axios from "axios";
import { useState } from "react";
import { formatMoney } from "../../utils/money";
export function CartItemDetails({ cartItem, loadCart }) {
  const [isUpdatingQuantity, setIsUpdatingQuantity] = useState(false);
  const [quantity,setQuantity] = useState(cartItem.quantity);
  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`)
    await loadCart();


  }
  const updateQuantity = async() => {
    if (isUpdatingQuantity) {
 await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity: Number(quantity),
 });
 loadCart();
      setIsUpdatingQuantity(false)
    }
    else {
      setIsUpdatingQuantity(true);
    }
  };

  const updateValue = (event)=>{
    setQuantity(event.target.value);

  };

  const keyPressed = (event)=>
{
if(event.key === 'Enter'){
  updateQuantity();
}
else if(event.key === 'Escape'){
  setQuantity(cartItem.quantity);
  setIsUpdatingQuantity(false);
}
}
  return (
    <>
      <img className="product-image"
        src={cartItem.product.image} />
      <div className="cart-item-details">
        <div className="product-name">
          {cartItem.product.name}
        </div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>

            Quantity: <input value = {quantity} type="text" className="label-input"
            onChange = {updateValue}
            onKeyDown={keyPressed}></input>
            <span className="quantity-label">{cartItem.quantity}</span>
          </span>
          <span className="update-quantity-link link-primary"
            onClick={updateQuantity}>

            Update
          </span>
          <span className="delete-quantity-link link-primary"
            onClick={deleteCartItem}>
            Delete
          </span>
        </div>
      </div>
    </>
  );
}