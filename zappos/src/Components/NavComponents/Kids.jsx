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
const Kids = () => {
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
        Kids
      </MenuButton>
      <MenuList w='70vw' >
        <HStack padding="0px 20px" display='flex' alignItems='start'>
          <VStack  w="16%" fontSize="16px">
            <MenuItem fontWeight="600" fontSize="18px">
              Kids
            </MenuItem>
            <MenuItem>Sneakers</MenuItem>
            <MenuItem>Sandals</MenuItem>
            <MenuItem>Swimwear</MenuItem>
            <MenuItem>Flats</MenuItem>
            <MenuItem>Shirts & Tops</MenuItem>
            <MenuItem>Clogs</MenuItem>
            <MenuItem>Shorts</MenuItem>
            <MenuItem>Heels</MenuItem>
            <MenuItem>Dresses</MenuItem>
            <MenuItem>Loafers</MenuItem>
            <MenuItem>Jeans</MenuItem>
            <MenuItem>Boots</MenuItem>
            <MenuItem>Single Shoes</MenuItem>
            <MenuItem>Shop all Kids</MenuItem>
          </VStack>
          <VStack  w="16%" fontSize="16px">
            <MenuItem fontWeight="600" fontSize="18px">
              Girls
            </MenuItem>
            <MenuItem>Sneakers</MenuItem>
            <MenuItem>Sandals</MenuItem>
            <MenuItem>Swimwear</MenuItem>
            <MenuItem>Flats</MenuItem>
            <MenuItem>Shirts & Tops</MenuItem>
            <MenuItem>Dresses</MenuItem>
            <MenuItem>Heels</MenuItem>
            <MenuItem>Shorts</MenuItem>
            <MenuItem>Clogs</MenuItem>
            <MenuItem>Light Jackets</MenuItem>
            <MenuItem>Boots</MenuItem>
            <MenuItem>Single Shoes</MenuItem>
            <MenuItem>Shop all Girls</MenuItem>
          </VStack>
          <VStack  w="16%" fontSize="16px">
            <MenuItem fontWeight="600" fontSize="18px">
              Boys
            </MenuItem>
            <MenuItem>Sneakers</MenuItem>
            <MenuItem>Sandals</MenuItem>
            <MenuItem>Swimwear</MenuItem>
            <MenuItem>Shirts & Tops</MenuItem>
            <MenuItem>Dresses</MenuItem>
            <MenuItem>Heels</MenuItem>
            <MenuItem>Shorts</MenuItem>
            <MenuItem>Clogs</MenuItem>
            <MenuItem>Light Jackets</MenuItem>
            <MenuItem>Boots</MenuItem>
            <MenuItem>Pants</MenuItem>
            <MenuItem>Single Shoes</MenuItem>
            <MenuItem>Shop all Buys</MenuItem>
          </VStack>
          <VStack  w="16%" fontSize="16px">
            <MenuItem fontWeight="600" fontSize="18px">
              Accessories & More
            </MenuItem>
            <MenuItem>Backpacks</MenuItem>
            <MenuItem>Sunglasses</MenuItem>
            <MenuItem>Hats</MenuItem>
            <MenuItem>Toys & Games</MenuItem>
            <MenuItem fontWeight="600" fontSize="18px">Sale</MenuItem>
            <MenuItem>Sneakers</MenuItem>
            <MenuItem>Sandals</MenuItem>
            <MenuItem>Swimwear</MenuItem>
            <MenuItem>Shop All Kid's Sale</MenuItem>
            <MenuItem>Shop size Conversion Chart</MenuItem>
          </VStack>
          <VStack  w="16%" fontSize="16px">
            <MenuItem fontWeight="600" fontSize="18px">
              Features
            </MenuItem>
            <MenuItem>Ground Up X Disney</MenuItem>
            <MenuItem>Kid's Athleticcs</MenuItem>
            <MenuItem>Character Shop (Disney & More)</MenuItem>
            <MenuItem>Juniors & Teen</MenuItem>
            <MenuItem>Baby Shop</MenuItem>
            <MenuItem fontWeight="600" fontSize="18px">Top Brands</MenuItem>
            <MenuItem>Vans Kids</MenuItem>
            <MenuItem>Crocs Kids</MenuItem>
            <MenuItem>Native Kids</MenuItem>
            <MenuItem>adidas Kids</MenuItem>
            <MenuItem>KEEN Kids</MenuItem>
          </VStack>
          <VStack w='16%'>
            <VStack>
              <Image
                
                src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/September/kids350x350.png"
              ></Image>
              <Text>Shop Kids' Cozy Clothing</Text>
            </VStack>
            <VStack>
              <Image
               
                src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/April/COOP-VANS-KIDS-GLOBAL-NAV-350x350.jpg"
              ></Image>
              <Text>Shop Sneakers & Athletic Shoes</Text>
            </VStack>
          </VStack>
        </HStack>
      </MenuList>
    </Menu>
  );
}

export default Kids;
