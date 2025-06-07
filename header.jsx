import { useState } from 'react';
import { useNavigate } from 'react-router';
import {NavLink} from 'react-router';
import './Header.css';
import LogoWhite from '../assets/images/logo-white.png';
import MobileLogoWhite from '../assets/images/mobile-logo-white.png';
import CartIcon from '../assets/images/icons/cart-icon.png';
import SearchIcon from '../assets/images/icons/search-icon.png';
export function Header({cart}) {
  const [searchValue,setSearchValue] = useState('');
  const navigate = useNavigate();

  let cartQuantity = 0;
  cart.forEach((cartItem)=>{
    cartQuantity+=cartItem.quantity;
  });

  const searchContent = (event)=>{
    setSearchValue(event.target.value);
  };

  const searchClick = ()=>{
    navigate(`/?search = ${searchValue}`)
  }

  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img className="logo"
            src={LogoWhite} />
          <img className="mobile-logo"
            src={MobileLogoWhite} />
        </NavLink>
      </div>

      <div className="middle-section">
        <input onChange = {searchContent} className="search-bar" type="text" placeholder="Search" />

        <button onClick = {searchClick} className="search-button">
          <img className="search-icon" src={SearchIcon} />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" to="/orders">

          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src={CartIcon} />
          <div className="cart-quantity">{cartQuantity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  );
}