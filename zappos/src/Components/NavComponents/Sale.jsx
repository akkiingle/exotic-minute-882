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
const Sale = () => {
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
     Sale
    </MenuButton>
    <MenuList w='70vw' h='70vh'>
      <HStack padding="0px 20px">
        <VStack h='87vh' w="20%" fontSize="20px">
          <MenuItem fontWeight="700" fontSize="20px">
            Women's Sale
          </MenuItem>
          <MenuItem>Sneakers & Athletic</MenuItem>
          <MenuItem>Boots</MenuItem>
          <MenuItem>Slippers</MenuItem>
          <MenuItem>Coats & Outerwear</MenuItem>
          <MenuItem>Shirts and Tops</MenuItem>
          <MenuItem>Dresses</MenuItem>
          <MenuItem>Swim</MenuItem>
          <MenuItem>Denim</MenuItem>
          <MenuItem>All Women's Sale</MenuItem>
        </VStack>
        <VStack h='87vh' w="20%"fontSize="20px">
            <MenuItem fontWeight="700" fontSize="20px">
            Men's Sale
            </MenuItem>
            <MenuItem>Sneakers & Athletic</MenuItem>
            <MenuItem>Boots</MenuItem>
            <MenuItem>Coats & Outerwear</MenuItem>
            <MenuItem>Shirts and Tops</MenuItem>
            <MenuItem>Denim</MenuItem>
            <MenuItem>Hoodies and Sweatshirts</MenuItem>
            <MenuItem>Shorts</MenuItem>
            <MenuItem>Swim</MenuItem>
            <MenuItem>All Men's Sale</MenuItem>
          </VStack>
          <VStack h='87vh' w="20%" fontSize="20px">
            <MenuItem fontWeight="700" fontSize="20px">
            Kids' Sale
            </MenuItem>
            <MenuItem>Sneakers</MenuItem>
            <MenuItem>Boots</MenuItem>
            <MenuItem>Coats & Outerwear</MenuItem>
            <MenuItem>Sandals</MenuItem>
            <MenuItem>Shorts</MenuItem>
            <MenuItem>Tops & Tees</MenuItem>
            <MenuItem>Slippers</MenuItem>
            <MenuItem>Sleepwear</MenuItem>
            <MenuItem>All Kids Sale</MenuItem>
          </VStack>
          <VStack h='87vh' w="20%" fontSize="20px">
            <MenuItem fontWeight="700" fontSize="20px">
            Featured Sale
            </MenuItem>
            <MenuItem>Crocs</MenuItem>
            <MenuItem>Clogs</MenuItem>
            <MenuItem>Hoka</MenuItem>
            <MenuItem>Dresses</MenuItem>
            <MenuItem>Sandals</MenuItem>
            <MenuItem fontWeight="700" fontSize="20px">Programs</MenuItem>
            <MenuItem>Education Discount</MenuItem>
            <MenuItem>Military Discount</MenuItem>
          </VStack>
        <VStack h='87vh' w="20%">
          <VStack>
            <Image
              h="30vh"
              src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/September/LUCKY-BRAND-WOMENS-BASEL-BOOTIE-GLOBAL-NAV-350x350.jpg"
            ></Image>
            <Text>Shop Boots On Sale</Text>
          </VStack>
          <VStack>
            <Image
              h="30vh"
              src="https://m.media-amazon.com/images/G/01/2022/MMK/ZAPPOS_350x350_PLATE.jpg"
            ></Image>
            <Text>Shop Sale</Text>
          </VStack>
        </VStack>
      </HStack>
    </MenuList>
  </Menu>
  );
}

export default Sale;
