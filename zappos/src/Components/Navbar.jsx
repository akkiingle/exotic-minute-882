import {
  Box,
  VStack,
  Image,
  Text,
  HStack,
  Flex,
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  Grid,
  GridItem,
  InputGroup,
  Input,
  InputRightAddon,
  InputLeftAddon,
} from '@chakra-ui/react';
import {
  TriangleDownIcon,
  CloseIcon,
  SearchIcon,
  EmailIcon,
} from '@chakra-ui/icons';

import New from "../Components/NavComponents/New";
import Women from "../Components/NavComponents/Women";
import Men from "../Components/NavComponents/Men";
import Kids from "../Components/NavComponents/Kids";
import Sale from "../Components/NavComponents/Sale";
import Departments from "../Components/NavComponents/Departments";
import Brand from "../Components/NavComponents/Brands";
import Clothing from "../Components/NavComponents/Clothing";
import {NavLink} from "react-router-dom";

function Navbar() {
  return (
    <Box  w='100%'>
      <VStack spacing="0px" w='100%'>
        <Flex
          display="flex"
          justifyContent="left"
          width="100%"
          paddingLeft="6%"
          //   border="1px solid"
        >
          
          <Box bg="blue.500" padding="5px" width="150px">
            <Image
              src="https://m.media-amazon.com/images/G/01/zappos/melody/black-logo.svg"
              alt="Dan"
              filter="invert(100%)"
              height="20px"
              margin="auto"
            />
          </Box>
         
          <Text
            fontSize="20px"
            fontWeight="700"
            borderRight="2.5px solid gray"
            padding="0px 18px"
          >
            vrsnL
          </Text>
        </Flex>
        <Flex
          bg="blue.500"
          width="100%"
          display="flex"
          justifyContent="space-between"
          paddingRight="8%"
          alignItems="center"
        >
          <Box borderRight="2.5px solid gray" paddingLeft="5vw">
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<TriangleDownIcon fontSize="12px" marginTop="5px" />}
                bg="transparent"
                color="white"
                fontSize="18px"
                fontWeight="600"
                transition="all 0.2s"
                _hover={{ bg: 'transprant' }}
                _expanded={{ bg: 'blue.500' }}
              >
                Customer Service
              </MenuButton>
              <MenuList
                zIndex="10"
                display="flex"
                flexDirection="column"
                gap="10px"
                fontSize="20px"
              >
                <MenuItem direction="flex" justifyContent="space-between">
                  Contact Info {<CloseIcon fontSize="15px" />}
                </MenuItem>
                <MenuItem>FAQ</MenuItem>
                <MenuItem>Give Us Feedback</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box display={{ base: 'none', sm: 'none', md: 'block', lg: 'block' }}>
            <Text fontSize="1vw" color="white">
              Every Zappos order comes with FAST, FREE Shipping, plus a FREE
              365-Day Return Policy! More About Shipping & Returns
            </Text>
          </Box>
        </Flex>

        {/* Logo And search box and cart button */}

        <Grid
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          width="100%"
        >
          <GridItem>
          <NavLink to='/'>
            <Image
              boxSize="70px"
              src="https://m.media-amazon.com/images/G/01/zappos/melody/zapposPBS._CB1509642213_.svg"
              alt="Dan Abramov"
              width="110px"
              // border='1px solid'
            />
             </NavLink>
          </GridItem>
          <GridItem>
            <InputGroup
              w="45vw"
              // border={'1px solid red'}
            >
              <InputLeftAddon
                children={<SearchIcon />}
                bg="transparent"
                borderRight="none"
                h="40px"
              />
              <Input
                placeholder="Search for shoes, clothes, etc."
                borderLeft="none"
                h="40px"
              />
              <InputRightAddon children="Search" h="40px" />
            </InputGroup>
          </GridItem>
          <GridItem>
            <Button
              leftIcon={<EmailIcon />}
              border={'2.5px solid #9AE6B4'}
              h="40px"
            >
              MY CART
            </Button>
          </GridItem>
        </Grid>

        {/* navigation tabs */}

        <HStack  w="100%" spacing="10%"   paddingLeft=" 5vw" bg='#F7FAFC' display={{base: 'none', sm: 'none', md: 'none',lg:'flex'}}>
          <HStack  w="70%">
            /<New />
            <Women/>
            <Men/>
            <Kids/>
            <Departments/>
            <Brand/>
            <Sale/>
            <Clothing/>
          </HStack>
          
          <HStack fontSize="16px" fontWeight="600" >
            <NavLink to='/login'>
            <Text>Sign In / Register</Text>
            </NavLink>
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
}

export default Navbar;
