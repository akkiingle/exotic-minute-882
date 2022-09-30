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
  

const Women = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<TriangleDownIcon fontSize="12px" marginTop="5px" />}
        bg="transparent"
        fontSize="16px"
        transition="all 0.2s"
        _hover={{ bg: 'transprant', borderBottom: '2px solid ' }}
      >
        Women
      </MenuButton>
      <MenuList w='70vw'>
        <HStack padding="0px 20px" display='flex' alignItems='start'>
          <VStack  w="20%" fontSize="16px" >
            <MenuItem fontWeight="600" fontSize="18px">Shoes</MenuItem>
            <MenuItem>Sneakers & Athletic</MenuItem>
            <MenuItem>Sandals</MenuItem>
            <MenuItem>Clogs & Mules</MenuItem>
            <MenuItem>Heels</MenuItem>
            <MenuItem>Boots & Booties</MenuItem>
            <MenuItem>Slippers</MenuItem>
            <MenuItem>Flats</MenuItem>
            <MenuItem>Loafers</MenuItem>
            <MenuItem>Comfort</MenuItem>
            <MenuItem>Wide</MenuItem>
            <MenuItem>Narrow</MenuItem>
            <MenuItem>Single Shoes</MenuItem>
            <MenuItem>Shop All Shoes</MenuItem>
          </VStack>
          <VStack w="20%" fontSize="16px" >
            <MenuItem fontWeight="600" fontSize="18px">Clothing</MenuItem>
            <MenuItem>Shirt & Tops</MenuItem>
            <MenuItem>Swimwear</MenuItem>
            <MenuItem>Dresses</MenuItem>
            <MenuItem>Shorts</MenuItem>
            <MenuItem>Jeans & Denim</MenuItem>
            <MenuItem>Underwear & Intimates</MenuItem>
            <MenuItem>Coats & Outerwear</MenuItem>
            <MenuItem>Socks</MenuItem>
            <MenuItem>Sleepwear</MenuItem>
            <MenuItem>Activewear</MenuItem>
            <MenuItem>Plus Size</MenuItem>
            <MenuItem>Petite</MenuItem>
            <MenuItem>Shop All Clothing</MenuItem>
          </VStack>
          <VStack w="20%" fontSize="16px" >
            <MenuItem fontWeight="600" fontSize="18px">Accessories & More</MenuItem>
            <MenuItem>Bags & Handbags</MenuItem>
            <MenuItem>Backpacks</MenuItem>
            <MenuItem>Belt Bags</MenuItem>
            <MenuItem>Hair</MenuItem>
            <MenuItem>Sunglasses</MenuItem>
            <MenuItem>Statement Earrings</MenuItem>
            <MenuItem>Face Masks</MenuItem>
            <MenuItem>Tech Accessories</MenuItem>
            <MenuItem>Scarves</MenuItem>
            <MenuItem>Hats</MenuItem>
            <MenuItem>Blue Light Glasses</MenuItem>
            <MenuItem>Shop All Accessories</MenuItem>           
          </VStack>
          <VStack w="20%" fontSize="16px">
            <MenuItem fontWeight="600" fontSize="18px">Gift Cards</MenuItem>
            <MenuItem fontWeight="600" fontSize="18px">Sale</MenuItem>
            <MenuItem>Sneakesrs & Athletic</MenuItem>
            <MenuItem>Heels</MenuItem>
            <MenuItem>Sandals</MenuItem>
            <MenuItem>Slippers</MenuItem>
            <MenuItem>Boots</MenuItem>
            <MenuItem>Shirts AndTops</MenuItem>
            <MenuItem>Dresses</MenuItem>
            <MenuItem>Swim</MenuItem>
            <MenuItem>Sweaters</MenuItem>
            <MenuItem>Shop All Sale</MenuItem>
          </VStack>
          <VStack  w="20%" fontSize="16px">
            <MenuItem fontWeight="600" fontSize="18px">Featured</MenuItem>
            <MenuItem>The Find</MenuItem>
            <MenuItem>The Style Room</MenuItem>
            <MenuItem>UFC Shop</MenuItem>
            <MenuItem>Female Founded</MenuItem>
            <MenuItem>Influncer Favorites</MenuItem>
            <MenuItem>Fall 2022 Guide to Fashion</MenuItem>
            <MenuItem>Weddings Shop</MenuItem>
            <MenuItem fontWeight="600" fontSize="18px">New Arrivals</MenuItem>
            <MenuItem>Awe Inspired</MenuItem>
            <MenuItem>Sweaty Betty</MenuItem>
            <MenuItem>Fairfax and Favor</MenuItem>
            <MenuItem>Wildfox</MenuItem>
            <MenuItem>girlfriend collective</MenuItem>
          </VStack>
          <VStack>
            <VStack>
              <Image

                src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/August/CROCS-BLK-WHT-MARBLED-SEPTEMBER-GLOBALNAV-350x350.jpg"
              ></Image>
              <Text>Shop Crocs</Text>
            </VStack>
            <VStack>
              <Image
              
                src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/August/RUNNING-SHOES-GLOBAL-NAV.jpg"
              ></Image>
              <Text>Shop Running Shoes</Text>
            </VStack>
          </VStack>
        </HStack>
      </MenuList>
    </Menu>
  );
}

export default Women;
