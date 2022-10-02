import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Divider,
  HStack,
  VStack,
  Text,
  UnorderedList,
  ListItem,
  Box,
} from '@chakra-ui/react';
import Login from '../Login/Login';
import { AuthContext } from '../Context/AuthContext';
import {useContext} from "react"

const SignUp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {state,dispatch}=useContext(AuthContext);
  
  return (
    <>
      <Button onClick={onOpen} bg="transparent" >
        {state.isAuth? "Hello Akshay" :"Sign In / Register"}
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered size="5xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader >Sign-in</ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody>
            <HStack gap="10">
              {/* left side */}
              <VStack w="50%" borderRight="2px solid gray">
                <Button bg="transparent" border="2px solid" w="90%">
                  SIGN IN WITH ZAPPOS
                </Button>
                <Button bg="transparent" border="2px solid" w="90%">
                  SIGN IN WITH AMAZON
                </Button>
                <Button bg="transparent" border="2px solid" w="90%">
                  SIGN IN WITH GOOGLE
                </Button>

                <Box w='90%'>
                {state.isAuth? <Button bg="transparent" border="2px solid" w="100%" h='50px' onClick={()=>dispatch({type:"AUTHSTATUS"})}>
                  YOU ARE SUCCESSFULLY LOGGED IN. Click to LogOut
                </Button>: <Login />}
                </Box>
              </VStack>
              {/* right side */}
              <VStack w="50%">
                <Text fontSize="19px" fontWeight="600">
                  By logging in with Amazon, you may be eligible for additional
                  Prime benefits like FREE Upgraded Shipping. Then, join Zappos
                  VIP for additional Prime-linked VIP perks:
                </Text>
                <UnorderedList spacing="4">
                  <ListItem>
                    If you are an Amazon Prime Member, sign in with Amazon to
                    qualify for free upgraded shipping!
                  </ListItem>
                  <ListItem>Get FREE Expedited Shipping</ListItem>
                  <ListItem>Earn 2 Points for Every $1 Spent</ListItem>
                  <ListItem>Receive Bonus Points on Select Brands</ListItem>
                  <ListItem>Redeem Points for VIP Codes</ListItem>
                </UnorderedList>
              </VStack>
            </HStack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignUp;
