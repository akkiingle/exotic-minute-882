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

function New() {
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
        New
      </MenuButton>
      <MenuList w='60vw'>
        <HStack padding="0px 20px" display='flex' alignItems='start'>
          <VStack w="25%" fontSize="16px">
            <MenuItem fontWeight="600" fontSize="18px">
              The Style Room
            </MenuItem>
            <MenuItem>Free People: Nostalgic Bohemia</MenuItem>
            <MenuItem>UGG: Authentically You Fashion</MenuItem>
            <MenuItem>7FAM: Everyday Denim</MenuItem>
            <MenuItem>Party Revival</MenuItem>
            <MenuItem>Supercharged Simplicity</MenuItem>
            <MenuItem>All About the Bag</MenuItem>
            <MenuItem>Men's Prep-Ease</MenuItem>
            <MenuItem>Men's Footwear Refresh</MenuItem>
            <MenuItem>Men's Workwear Inspired</MenuItem>
          </VStack>
          <VStack w="25%" fontSize="16px" >
            <MenuItem fontWeight="600" fontSize="18px">
              New Brands
            </MenuItem>
            <MenuItem>SAOLA</MenuItem>
            <MenuItem>VISCATA</MenuItem>
            <MenuItem>FREYA</MenuItem>
            <MenuItem>Tommy John</MenuItem>
            <MenuItem>Pajamarama</MenuItem>
            <MenuItem>Draper James</MenuItem>
            <MenuItem>MANGO</MenuItem>
            <MenuItem>Melin</MenuItem>
            <MenuItem>LABEL</MenuItem>
          </VStack>
          <VStack
            textAlign="left"
            w="25%"
            fontSize="16px"
            
            borderRight="1px solid gray"
          >
            <MenuItem fontWeight="600" fontSize="18px">
              New Arrivals
            </MenuItem>
            <MenuItem>The Find</MenuItem>
            <MenuItem>Toys & Games</MenuItem>
            <MenuItem>Drinkware</MenuItem>
            <MenuItem>Home Decor</MenuItem>
            <MenuItem>Marc Fisher Kids</MenuItem>
            <MenuItem>Exclusive "Heatwave" Capsule</MenuItem>
            <MenuItem>Exclusive Crocs x Smileyworld® collection</MenuItem>
            <MenuItem>Fall Fashion Guide</MenuItem>
            <MenuItem>abercrombie Kids</MenuItem>
          </VStack>
          <VStack w="25%">
            <VStack>
              <Image
                
                src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/September/COOP-SOREL-NEW-ARRIVALS-350x350.jpg"
              ></Image>
              <Text>Shop New SOREL Footwear</Text>
            </VStack>
            <VStack>
              <Image
                
                src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/September/fall-style-global.jpg"
              ></Image>
              <Text>Shop Fall Trends</Text>
            </VStack>
          </VStack>
        </HStack>
      </MenuList>
    </Menu>
  );
}

export default New;
