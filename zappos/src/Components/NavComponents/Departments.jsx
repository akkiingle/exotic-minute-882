import React from 'react';
import {
    Menu,
    Button,
    MenuButton,
    MenuList,
    MenuItem,
    VStack,
    HStack,
    Image,
    Text,
  } from '@chakra-ui/react';
  import { TriangleDownIcon} from '@chakra-ui/icons';
const Departments = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<TriangleDownIcon fontSize="12px" marginTop="5px" />}
        bg="transparent"
        fontSize="17px"
        transition="all 0.2s"
        _hover={{ bg: 'transprant', borderBottom: '2px solid ' }}
      >
        Departments
      </MenuButton>
      <MenuList w='70vw' >
        <HStack padding="0px 20px">
          <VStack h='87vh' w="20%" fontSize="20px">
            <MenuItem fontWeight="700" fontSize="20px">
              The Style Room
            </MenuItem>
            <MenuItem>Shoes</MenuItem>
            <MenuItem>Boots</MenuItem>
            <MenuItem>Clothing</MenuItem>
            <MenuItem>Bags & Handbags</MenuItem>
            <MenuItem>Jewelry & Accessories</MenuItem>
            <MenuItem>Womens</MenuItem>
            <MenuItem>Mens</MenuItem>
            <MenuItem>Kids</MenuItem>
            <MenuItem>Adaptive</MenuItem>
            <MenuItem>Home</MenuItem>
            <MenuItem>Goods For Good</MenuItem>
            <MenuItem>Running</MenuItem>
            <MenuItem>Toys & Games</MenuItem>
            <MenuItem>Wedding</MenuItem>
          </VStack>
          <VStack h='87vh' w="20%" fontSize="20px">
            <MenuItem fontWeight="700" fontSize="20px">
              Shops
            </MenuItem>
            <MenuItem>The Style Room</MenuItem>
            <MenuItem>The Maternity Shop</MenuItem>
            <MenuItem>Yoga/Performance Studio</MenuItem>
            <MenuItem>The Outdoor Shop</MenuItem>
            <MenuItem>Shop By Sport</MenuItem>
            <MenuItem>The Fan Shop</MenuItem>
            <MenuItem>The Baby Shop</MenuItem>
            <MenuItem>The Workout Shop</MenuItem>
            <MenuItem>UFC Shop</MenuItem>
            <MenuItem>The Running Shop</MenuItem>
            <MenuItem>Wedding Shop</MenuItem>
            <MenuItem>The Find</MenuItem>
            <MenuItem>The_ONES Sneakers</MenuItem>
            
          </VStack>
          <VStack h='87vh' w="20%" fontSize="20px">
            <MenuItem fontWeight="700" fontSize="20px">
              Trending Brands
            </MenuItem>
            <MenuItem>Abercrombie & Fitch</MenuItem>
            <MenuItem>S13</MenuItem>
            <MenuItem>Joy Davrecky</MenuItem>
            <MenuItem>BB Dakota by Steve Madden</MenuItem>
            <MenuItem>Sorel</MenuItem>
            <MenuItem>Dr. Martens</MenuItem>
            <MenuItem>Madewell</MenuItem>
            <MenuItem>Crocs</MenuItem>
            <MenuItem>Draper James</MenuItem>
          </VStack>
          <VStack h='87vh' w="20%" fontSize="20px">
            <MenuItem fontWeight="700" fontSize="20px">
            Shopping Guides
            </MenuItem>
            <MenuItem>Fall Fashion Guide</MenuItem>
            <MenuItem>Kids' Nike & Jordan Styles</MenuItem>
            <MenuItem fontWeight="700" fontSize="20px">Gift Cards</MenuItem>
            <MenuItem>E-Gift Cards</MenuItem>
            <MenuItem>Mail Gift Cards</MenuItem>
            <MenuItem fontWeight="700" fontSize="20px">Zappos at Work</MenuItem>
            <MenuItem>Learn More</MenuItem>
            <MenuItem>Amazon Customers</MenuItem>
          </VStack>
          <VStack h='87vh' w="20%">
            <VStack>
              <Image
                h="30vh"
                src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/September/WOMENS-DENIM-BEST-SELLERS-AUGUST-PROMO-350X350.png"
              ></Image>
              <Text>The Denim Shop</Text>
            </VStack>
            <VStack>
              <Image
                h="30vh"
                src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/February/ZGC-globalnav-010322.jpg"
              ></Image>
              <Text>Shop Gift Cards</Text>
            </VStack>
          </VStack>
        </HStack>
      </MenuList>
    </Menu>
  );
}

export default Departments;
