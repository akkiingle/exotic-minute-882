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
const Clothing = () => {
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
        Clothing
      </MenuButton>
      <MenuList  w='90vw' >
        <HStack padding="0px 20px" display='flex' alignItems='start'>
          <VStack w="16%" fontSize="16px">
            <MenuItem fontWeight="600" fontSize="18px">
            Women's Clothing
            </MenuItem>
            <MenuItem>Shirts & Tops</MenuItem>
            <MenuItem>Activewear & Yoga</MenuItem>
            <MenuItem>Dresses</MenuItem>
            <MenuItem>Jeans & Denim</MenuItem>
            <MenuItem>Coats & Outerwear</MenuItem>
            <MenuItem>Swimwear</MenuItem>
            <MenuItem>Sleepwear</MenuItem>
            <MenuItem>Sweaters</MenuItem>
            <MenuItem>Shorts</MenuItem>
            <MenuItem>Intimates</MenuItem>
            <MenuItem>Plus Size</MenuItem>
            <MenuItem>Petite</MenuItem>
            <MenuItem>Shop All Women's Clothing</MenuItem>
          </VStack>
          <VStack  w="16%" fontSize="16px">
            <MenuItem fontWeight="600" fontSize="18px">
            Men's Clothing
            </MenuItem>
            <MenuItem>Shirts & Tops</MenuItem>
            <MenuItem>Shorts</MenuItem>
            <MenuItem>Swimwear</MenuItem>
            <MenuItem>Pants</MenuItem>
            <MenuItem>Shorts</MenuItem>
            <MenuItem>Underwear</MenuItem>
            <MenuItem>Coats & Outerwear</MenuItem>
            <MenuItem>Hoodies & Sweatshirts</MenuItem>
            <MenuItem>Big & Tall</MenuItem>
            <MenuItem>Shop All Men's Clothing</MenuItem>
          </VStack>
          <VStack w="16%" fontSize="16px">
            <MenuItem fontWeight="600" fontSize="18px">
            Kids' Clothing
            </MenuItem>
            <MenuItem>Shirts & Tops</MenuItem>
            <MenuItem>Jeans & Denim</MenuItem>
            <MenuItem>Kids' Athletic</MenuItem>
            <MenuItem>Coats & Outerwear</MenuItem>
            <MenuItem>Hoodies & Sweatshirts</MenuItem>
            <MenuItem>Sleepwear</MenuItem>
            <MenuItem>Pants</MenuItem>
            <MenuItem>Swimwear</MenuItem>
            <MenuItem>Shorts</MenuItem>
            <MenuItem>Juniors & Teen</MenuItem>
            <MenuItem>Shop All Kids' Clothing</MenuItem>
          </VStack>
          <VStack  w="16%" fontSize="16px">
            <MenuItem fontWeight="600" fontSize="18px">
            Featured
            </MenuItem>
            <MenuItem>The Style Room</MenuItem>
            <MenuItem>The Find</MenuItem>
            <MenuItem>The Cozy Shop</MenuItem>
            <MenuItem>The Denim Shop</MenuItem>
            <MenuItem>The Maternity Shop</MenuItem>
            <MenuItem>Yoga/Performance Studio</MenuItem>
            <MenuItem>The Outdoor Shop</MenuItem>
            <MenuItem>Shop By Sport</MenuItem>
            <MenuItem>The Fan Shop</MenuItem>
            <MenuItem>The Baby Shop</MenuItem>
            <MenuItem>The Workout Shop</MenuItem>
            <MenuItem>Luxury Clothing on VRSNL</MenuItem>
          </VStack>
          <VStack  w="16%" fontSize="16px">
            <MenuItem fontWeight="600" fontSize="18px">
            New Arrivals
            </MenuItem>
            <MenuItem>Abercrombie & Fitch</MenuItem>
            <MenuItem>Ralph Lauren</MenuItem>
            <MenuItem>Sweaty Betty</MenuItem>
            <MenuItem>c9 Champion</MenuItem>
            <MenuItem>The Children's Place</MenuItem>
            <MenuItem>Shop All New Clothing Arrivals</MenuItem>
          </VStack>
          
          <VStack  w="16%">
            <VStack>
              <Image
                
                src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/August/WOMENS-ATHLETIC-NEW-ARRIVALS-AUGUST-TRIPTYCH-350X350.png"
              ></Image>
              <Text>Shop Yoga</Text>
            </VStack>
            <VStack>
              <Image
                
                src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/July/ENS-SUMMER-WORKOUT-CLOTHING-GLOBAL-NAV.jpg"
              ></Image>
              <Text>Shop Workout Clothing</Text>
            </VStack>
          </VStack>
        </HStack>
      </MenuList>
    </Menu>
  );
}

export default Clothing;
