import axios from  'axios';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import {Header} from '../../components/header'
import { ProductsGrid } from './productsGrid';
//import {products} from '../../starting-code/data/products';
import './HomePage.css';
export function HomePage( {cart,loadCart}){
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');
  
useEffect(()=>{

  const getHomeData = async () =>{
    let response = await axios.get('/api/products');
    const urlPath = search ? `/api/products?search=${search}` : '/api/products';
    response = await axios.get(urlPath);
      setProducts(response.data)
  };
  getHomeData();
  
},[search]);
  
  return(
    <>
    <title>Ecommerce Project</title>
     <Header cart ={cart} />

        <div className="home-page">
         <ProductsGrid products={products} loadCart = {loadCart} />

        </div>
        <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />
    </>
  );
}