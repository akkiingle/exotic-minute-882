import React from 'react';
import Home from "../Components/HomePage/HomePage";
import {Routes,Route} from "react-router-dom";
import SignUp from "./SignUp";
const AllRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path='/login' element={<SignUp/>}></Route>
   </Routes>
  );
}

export default AllRoutes;
