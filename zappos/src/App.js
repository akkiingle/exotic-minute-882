import React from 'react';
import {ChakraProvider, theme} from '@chakra-ui/react';
import AllRoutes from "./Pages/AllRoutes"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"

function App() {
  return (
    <ChakraProvider theme={theme} >
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
