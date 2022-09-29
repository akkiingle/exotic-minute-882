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

const Men = () => {
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
        Men
      </MenuButton>
      <MenuList h='70vh' w='70vw'>
        <HStack padding="0px 20px">
          <VStack h='87vh' w="18%" fontSize="20px">
            <MenuItem fontWeight="700" fontSize="20px">Shoes</MenuItem>
            <MenuItem>Sneakers & Athletic</MenuItem>
            <MenuItem>Sandals</MenuItem>
            <MenuItem>Running Shoes</MenuItem>
            <MenuItem>Oxfords</MenuItem>
            <MenuItem>Loafers</MenuItem>
            <MenuItem>Clogs</MenuItem>
            <MenuItem>Boots</MenuItem>
            <MenuItem>Wide</MenuItem>
            <MenuItem>Single Shoes</MenuItem>
            <MenuItem>Shop All Shoes</MenuItem>
          </VStack>
          <VStack h='87vh' w="18%" fontSize="20px">
            <MenuItem fontWeight="700" fontSize="20px">Clothing</MenuItem>
            <MenuItem>Shirts & Tops</MenuItem>
            <MenuItem>Shorts</MenuItem>
            <MenuItem>Swimwear</MenuItem>
            <MenuItem>Pants</MenuItem>
            <MenuItem>Jeans</MenuItem>
            <MenuItem>Underwear</MenuItem>
            <MenuItem>Activewear</MenuItem>
            <MenuItem>Hoodies & Sweatshirts</MenuItem>
            <MenuItem>Big & Tall</MenuItem>
            <MenuItem>Shop All Clothing</MenuItem>
          </VStack>
          <VStack h='87vh' w="18%" fontSize="20px">
            <MenuItem fontWeight="700" fontSize="20px">Accessories & More</MenuItem>
            <MenuItem>Bags</MenuItem>
            <MenuItem>Hats</MenuItem>
            <MenuItem>Sunglasses & Eyewear</MenuItem>
            <MenuItem>Belts</MenuItem>
            <MenuItem>Watches</MenuItem>
            <MenuItem>Ties & Pocket Squares</MenuItem>
            <MenuItem>Gloves</MenuItem>
            <MenuItem>Tech Accessories</MenuItem>
            <MenuItem>Wallets</MenuItem>
            <MenuItem>Shop All Accessories</MenuItem>
          </VStack>
          <VStack h='87vh' w="18%" fontSize="20px">
            <MenuItem fontWeight="700" fontSize="20px">Gift Cards</MenuItem>
            <MenuItem>E-Gift Cards</MenuItem>
            <MenuItem>Mail Gift cards</MenuItem>
            <MenuItem fontWeight="700" fontSize="20px">Sale</MenuItem>
            <MenuItem>Sneakers & Athletric</MenuItem>
            <MenuItem>Boots</MenuItem>
            <MenuItem>Shirts and Tops</MenuItem>
            <MenuItem>Denims</MenuItem>
            <MenuItem>Shorts</MenuItem>
            <MenuItem>Sandals</MenuItem>
            <MenuItem>Shop All Sale</MenuItem>
          </VStack>
          <VStack h='87vh' w="18%" fontSize="20px">
            <MenuItem fontWeight="700" fontSize="20px">Features</MenuItem>
            <MenuItem>The Style Room</MenuItem>
            <MenuItem>The Fan Shop</MenuItem>
            <MenuItem>Big and Tall</MenuItem>
            <MenuItem>UFC Shop</MenuItem>
            <MenuItem>Men's Golf Shoes & Clothings</MenuItem>
            <MenuItem>c9 Champion: $40 and Under</MenuItem>
            <MenuItem>Ginanni</MenuItem>
            <MenuItem>Xero Shoes</MenuItem>
            <MenuItem>Moral Code</MenuItem>
          </VStack>
          
          <VStack h='87vh' w="18%">
            <VStack>
              <Image
                h="30vh"
                src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/September/COOP-BED-HEAD-MENS-350x350.jpg"
              ></Image>
              <Text>Shop Zappos Print Lab X BedHead</Text>
            </VStack>
            <VStack>
              <Image
                h="30vh"
                src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/August/COOP-BROOKS-GLYCERIN-20-GLOBAL-NAV-350x350.jpg"
              ></Image>
              <Text>Shop Men's Running Shoes</Text>
            </VStack>
          </VStack>
        </HStack>
      </MenuList>
    </Menu>
  );
}

export default Men;
