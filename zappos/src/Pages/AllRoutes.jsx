import React from 'react';
import Home from "../Components/HomePage/HomePage";
import {Routes,Route} from "react-router-dom";
import Product from "../Pages/Product";
const AllRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/product" element={<Product/>}></Route>
   </Routes>
  );
}

export default AllRoutes;
