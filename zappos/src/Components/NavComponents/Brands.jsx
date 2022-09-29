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
  Divider,
} from '@chakra-ui/react';
import { TriangleDownIcon } from '@chakra-ui/icons';
const Brands = () => {
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
        Brands
      </MenuButton>
      <MenuList w="50vw">
        <VStack padding="0px 20px">
          <VStack spacing="3%" fontSize="20px" w="100%" padding="30px 0px">
            <MenuItem fontWeight="700" fontSize="20px">
              Brand Index
            </MenuItem>
            <MenuItem>
              # A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
            </MenuItem>
          </VStack>
          <Divider/>
          <VStack w="100%" padding="30px 0px">
            <MenuItem fontWeight="700" fontSize="20px">
              Featured Brand
            </MenuItem>
            <MenuItem
              _hover={{ bg: 'transprant' }}
              _expanded={{ bg: 'blue.500' }}
            >
              <HStack spacing="6%">
                <Image src="https://m.media-amazon.com/images/G/01/2020/trendingbrandlogos/WORL-Logo_2.png"></Image>
                <Image src="https://m.media-amazon.com/images/G/01/2020/trendingbrandlogos/crocs-brand-index-logo.jpg"></Image>
                <Image src="https://m.media-amazon.com/images/G/01/2020/trendingbrandlogos/drmartens-brand-index-logo.jpg"></Image>
                <Image src="https://m.media-amazon.com/images/G/01/2020/trendingbrandlogos/birkenstock-brand-index-logo.jpg"></Image>
                <Image src="https://m.media-amazon.com/images/G/01/2020/trendingbrandlogos/new-balance-brand-index-logo.jpg"></Image>
                <Image src="https://m.media-amazon.com/images/G/01/2020/trendingbrandlogos/HOKA-LOGO-BLUE.jpg"></Image>
                <Image src="https://m.media-amazon.com/images/G/01/2021/brandindex/adidas-brand-index-logo.jpg"></Image>
                <Image src="https://m.media-amazon.com/images/G/01/2020/trendingbrandlogos/native-brand-index.jpg"></Image>
              </HStack>
            </MenuItem>
          </VStack>
        </VStack>
      </MenuList>
    </Menu>
  );
};

export default Brands;
