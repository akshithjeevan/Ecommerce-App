import axios from 'axios';
import Header from "../../components/Header";
import "./HomePage.css";
// import { products } from "../../starting-code/data/products";
import { useEffect ,useState } from 'react';

import {ProductsGrid} from './ProductsGrid';


 function HomePage({cart,loadCart}) {
   const [products,setProducts] =useState([]);
  
useEffect(()=>{


// fetch() method...................................................
// fetch('http://localhost:3000/api/products')
// .then((response)=>{
//   return response.json(); 
// })  .then((data)=>{
//   })

// axios() method....................................................

const getHomeData =async ()=>{

const response = await axios.get(
  'https://ecommerce-app-i8sy.onrender.com/api/products'
);
setProducts(response.data);
};
getHomeData();
},[]);
  return (
    <div> 
      <title>Ecommerce Project</title>
      <Header cart={cart}/>

      <div className="home-page">
       <ProductsGrid products={products} loadCart={loadCart}/>
      </div>
    </div>
  );
}

export default HomePage;
