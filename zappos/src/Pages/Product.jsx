import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Progress,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import React, { useEffect, useState,useContext } from 'react';
import originaldata from '../csvjson.json';
import {CartContext} from "../Context/CartContext";
import { AuthContext } from '../Context/AuthContext';
import { Navigate } from 'react-router-dom';
var cartArr;
const Product = () => {
 
  const [data, setData] = useState(originaldata.data);
  const [num, setNum] = useState(0);
  const {setCartData,cartData} =useContext(CartContext);
  cartArr=cartData
  const {state} =useContext(AuthContext);
  const handleSort = e => {
  
    if (e === 'Customer Rating') {
      let dummy = originaldata.data;
      dummy.sort((a, b) => {
        let x = +a['Zc-z'];
        let y = +b['Zc-z'];
        return y - x;
      });
      setData(dummy);
      setNum(num + 1);
    }
    if (e === 'Low to High') {
      let dummy = originaldata.data;
      dummy.sort((a, b) => {
        let x = a['Is-z'];
        x = x.split('');
        for (let i = 0; i < x.length; i++) {
          if (x[i] === '$') {
            x.splice(i, 1);
          }
        }
        let y = b['Is-z'];
        y = y.split('');
        for (let i = 0; i < y.length; i++) {
          if (y[i] === '$') {
            y.splice(i, 1);
          }
        }
        x = +x.join('');
        y = +y.join('');

        return x - y;
      });
      setData(dummy);
      setNum(num + 1);
    }
    if (e === 'High to Low') {
      let dummy = originaldata.data;
      dummy.sort((a, b) => {
        let x = a['Is-z'];
        x = x.split('');
        for (let i = 0; i < x.length; i++) {
          if (x[i] === '$') {
            x.splice(i, 1);
          }
        }
        let y = b['Is-z'];
        y = y.split('');
        for (let i = 0; i < y.length; i++) {
          if (y[i] === '$') {
            y.splice(i, 1);
          }
        }
        x = +x.join('');
        y = +y.join('');

        return y - x;
      });
      setData(dummy);
      setNum(num + 1);
    }
   
  };

  const handleFilter = e => {
    
    let val = e.target.textContent;
    if(val==="All Brands"){
      setData(originaldata.data);
      return
    }
    let x = originaldata.data.filter(ele => {
      return ele['aq-z'].includes(val);
    });
    console.log(x);
    setData(x);
    setNum(num + 1);
  };

  const handleColourFilter = e => {
    console.log(e.target.textContent);
    let val = e.target.textContent;
    if(val==="All Colour"){
      setData(originaldata.data);
      return
    }
    let x = originaldata.data.filter(ele => {
      return ele['dq-z'].includes(val);
    });
    console.log(x);
    setData(x);
    setNum(num + 1);
  };

  const handleCartData=(ele)=>{
    console.log(cartArr)
    cartArr.push(ele);
    console.log(cartArr)
    setCartData(cartArr);
    setNum(num+1)
  }

  useEffect(() => {}, [num]);

  console.log(data);

  if(state.isAuth===false){
    return <Navigate to='/'/>
  }
  return (
    <Box w="95%" margin="auto" mt="20px">
      {/* top Section */}
      <HStack justifyContent="space-between">
        <Text fontWeight="500" fontSize="25px">
          Sneakers & Athletic Shoes
        </Text>
        <HStack w="300px" spacing="">
          <Text w="80px">Sort By</Text>
          <Select onChange={e => handleSort(e.target.value)}>
            <option value="Customer Rating">Customer Rating</option>
            <option value="Low to High">Price: Low to High</option>
            <option value="High to Low">Price: High to Low</option>
          </Select>
        </HStack>
      </HStack>

      {/* Main Content */}

      <Grid
        templateColumns={{
          base: 'repeat(1,1fr)',
          sm: 'repeat(1,1fr)',
          md: 'repeat(1,1fr)',
          lg: '15% 82%',
        }}
        margin="auto"
        gap="3%"
        mt="50px"
      >
        {/* sidebar */}

        <VStack >
          <Text fontWeight='500' fontSize='20px'>Filter Your Search</Text>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} w='100%'>
              Brand
            </MenuButton>
            <MenuList>
              <MenuItem onClick={e => handleFilter(e)}>All Brands</MenuItem>
              <MenuItem onClick={e => handleFilter(e)}>adidas</MenuItem>
              <MenuItem onClick={e => handleFilter(e)}>Brooks</MenuItem>
              <MenuItem onClick={e => handleFilter(e)}>Vans</MenuItem>
              <MenuItem onClick={e => handleFilter(e)}>Saucony</MenuItem>
              <MenuItem onClick={e => handleFilter(e)}>Converse</MenuItem>
              <MenuItem onClick={e => handleFilter(e)}>ASICS</MenuItem>
              <MenuItem onClick={e => handleFilter(e)}>Native</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} w='100%'>
              Colour
            </MenuButton>
            <MenuList>
              <MenuItem onClick={(e)=>handleColourFilter(e)}>All Colour</MenuItem>
              <MenuItem onClick={(e)=>handleColourFilter(e)}>White</MenuItem>
              <MenuItem onClick={(e)=>handleColourFilter(e)}>Black</MenuItem>
              <MenuItem onClick={(e)=>handleColourFilter(e)}>Blue</MenuItem>
              <MenuItem onClick={(e)=>handleColourFilter(e)}>Green</MenuItem>
              <MenuItem onClick={(e)=>handleColourFilter(e)}>Grey</MenuItem>
              <MenuItem onClick={(e)=>handleColourFilter(e)}>Red</MenuItem>
              <MenuItem onClick={(e)=>handleColourFilter(e)}>Silver</MenuItem>
            </MenuList>
          </Menu>
        </VStack>

        {/* product container */}

        <Grid
          templateColumns={{
            base: 'repeat(2,1fr)',
            sm: 'repeat(2,1fr)',
            md: 'repeat(3,1fr)',
            lg: 'repeat(4,1fr)',
          }}
          gap="5"
        >
          {data.map(ele => (
            <VStack
              key={ele['Yp-z']}
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              spacing=""
              alignItems="start"
              padding="0px 10px 10px 10px "
              justifyContent="space-between"
              borderRadius="5"
            >
              <VStack justifyContent="center" alignItems="center" w="100%">
                <Image
                  src={ele['er-z src'] || ele['screenReadersOnly src']}
                  h="200px"
                ></Image>
              </VStack>
              <Text fontSize="20px" fontWeight="500">
                {ele['aq-z']}
              </Text>
              <Text>{ele['bq-z']}</Text>
              <Text>{ele['Is-z']}</Text>
              <Text fontWeight="500">Rating</Text>
              <Progress
                value={(ele['Zc-z'] / 5) * 100 - 8}
                colorScheme="yellow"
                bg="transparent"
                w="100%"
              />
              <HStack justifyContent="space-between" w="100%">
                <h4>1😫</h4>
                <h3>2😐</h3>
                <h3>3🙂</h3>
                <h3>4😊</h3>
                <h3>5😍</h3>
              </HStack>
              <Text>
                {ele['Zc-z']}/5 {ele['_c-z']}
              </Text>
              <Button w="100%" onClick={()=>handleCartData(ele)}>ADD TO CART</Button>
            </VStack>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Product;
