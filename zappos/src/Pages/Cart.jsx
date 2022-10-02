import React, { useState } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
  Image,
  VStack,
  HStack,
  Text,
  useToast,
} from '@chakra-ui/react';
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useEffect } from 'react';
const Cart = () => {
  const { cartData, setCartData } = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const btnRef = React.useRef();
  console.log(cartData);
  const toast = useToast();
  const { state } = useContext(AuthContext);
  const handleCheckout = () => {
    if (state.isAuth) {
      toast({
        title: `Payment of ${price} Successful`,
        description: 'Your order will be delivered soon. Thanks for Shopping',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'User not logged in',
        description: 'To Place order, please login',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  function number(val) {
    setCount(val);
    let total = 0;
    cartData &&
      cartData.map(ele => {
        let x = ele['Is-z'];
        x = x.split('');
        for (let i = 0; i < x.length; i++) {
          if (x[i] === '$') {
            x.splice(i, 1);
          }
        }

        let y = +x.join('');
        total += y;
      });
    console.log(total);
    setPrice(total.toFixed(2));
  }
  useEffect(() => {
    number(cartData.length);
  }, [cartData.length]);

  const handleRemove = ele => {
    let x = cartData.filter(el => {
      return el !== ele;
    });
    setCartData(x);
  };
  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        border={'2.5px solid #9AE6B4'}
        h="40px"
      >
        MY CART
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Cart</DrawerHeader>

          <DrawerBody>
            {cartData ? (
              cartData.map(ele => (
                <VStack spacing="5" padding="3px 0px" w="100%">
                  <HStack
                    w="100%"
                    justifyContent="space-between"
                    boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                    padding="0px 3px"
                  >
                    <Image src={ele['er-z src']} boxSize="100px"></Image>
                    <VStack textAlign="center">
                      <Text fontSize="20px" fontWeight="500">
                        {ele['aq-z']}
                      </Text>
                      <Text>{ele['bq-z']}</Text>
                    </VStack>
                    <Text>Price:{ele['Is-z']}</Text>
                    <Button onClick={() => handleRemove(ele)}>Remove</Button>
                  </HStack>
                </VStack>
              ))
            ) : (
              
              <Box>
                <Image src="https://www.vinsolutions.com/wp-content/uploads/sites/2/vinsolutions/media/Vin-Images/news-blog/Empty_Shopping_Cart_blog.jpg"></Image>
              </Box>
            )}
            <Text fontSize="20px" fontWeight="500">
              Total Items:{count}
            </Text>
            <Text fontSize="20px" fontWeight="500">
              Total Price: ${price}
            </Text>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={() => handleCheckout()}>
              Checkout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
