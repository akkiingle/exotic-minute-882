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

function Navbar() {
  return (
    <Box border="1px solid red">
      <VStack spacing="0px">
        <Flex
          display="flex"
          justifyContent="left"
          width="100%"
          paddingLeft="3%"
          //   border="1px solid"
        >
          <Box bg="blue.500" padding="5px" width="150px">
            <Image
              src="https://m.media-amazon.com/images/G/01/zappos/melody/black-logo.svg"
              alt="Dan"
              filter="invert(100%)"
              height="25px"
              margin="auto"
            />
          </Box>
          <Text
            fontSize="20px"
            fontWeight="700"
            borderRight="2.5px solid gray"
            padding="0px 20px"
          >
            vrsnL
          </Text>
        </Flex>
        <Flex
          bg="blue.500"
          width="100%"
          display="flex"
          justifyContent="space-between"
          paddingRight="2%"
          alignItems="center"
        >
          <Box borderRight="2.5px solid gray" paddingLeft="2.5vw">
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<TriangleDownIcon fontSize="12px" marginTop="5px" />}
                bg="transparent"
                color="white"
                fontSize="22px"
                fontWeight="700"
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
            <Text fontSize="1.2vw" color="white">
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
            <Image
              boxSize="100px"
              src="https://m.media-amazon.com/images/G/01/zappos/melody/zapposPBS._CB1509642213_.svg"
              alt="Dan Abramov"
              width="160px"
              // border='1px solid'
            />
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
                h="50px"
              />
              <Input
                placeholder="Search for shoes, clothes, etc."
                borderLeft="none"
                h="50px"
              />
              <InputRightAddon children="Search" h="50px" />
            </InputGroup>
          </GridItem>
          <GridItem>
            <Button
              leftIcon={<EmailIcon />}
              border={'2.5px solid #9AE6B4'}
              h="60px"
            >
              MY CART
            </Button>
          </GridItem>
        </Grid>

        {/* navigation tabs */}

        <HStack  w="100%" spacing="15vw" paddingLeft=" 2.5vw" padding='12px' bg='#F7FAFC'>
          <HStack  w="70%">
            <Button
              rightIcon={<TriangleDownIcon fontSize="14" mt="1" />}
              fontSize="1.2vw"
              bg="transparent"
              _hover={{ bg: 'transprant', borderBottom: '2px solid ' }}
            >
              New
            </Button>
            <Button
              rightIcon={<TriangleDownIcon fontSize="14" mt="1" />}
              fontSize="1.2vw"
              bg="transparent"
              _hover={{ bg: 'transprant', borderBottom: '2px solid ' }}
            >
              Women
            </Button>
            <Button
              rightIcon={<TriangleDownIcon fontSize="14" mt="1" />}
              fontSize="1.2vw"
              bg="transparent"
              _hover={{ bg: 'transprant', borderBottom: '2px solid ' }}
            >
              Men
            </Button>
            <Button
              rightIcon={<TriangleDownIcon fontSize="14" mt="1" />}
              fontSize="1.2vw"
              bg="transparent"
              _hover={{ bg: 'transprant', borderBottom: '2px solid ' }}
            >
              Kids
            </Button>
            <Button
              rightIcon={<TriangleDownIcon fontSize="14" mt="1" />}
              fontSize="1.2vw"
              bg="transparent"
              _hover={{ bg: 'transprant', borderBottom: '2px solid ' }}
            >
              Departments
            </Button>
            <Button
              rightIcon={<TriangleDownIcon fontSize="14" mt="1" />}
              fontSize="1.2vw"
              bg="transparent"
              _hover={{ bg: 'transprant', borderBottom: '2px solid ' }}
            >
              Brands
            </Button>
            <Button
              rightIcon={<TriangleDownIcon fontSize="14" mt="1" />}
              fontSize="1.2vw"
              bg="transparent"
              _hover={{ bg: 'transprant', borderBottom: '2px solid ' }}
            >
              Sale
            </Button>
            <Button
              rightIcon={<TriangleDownIcon fontSize="14" mt="1" />}
              fontSize="1.2vw"
              bg="transparent"
              _hover={{ bg: 'transprant', borderBottom: '2px solid ' }}
            >
              Clothing
            </Button>
          </HStack>

          <HStack fontSize="1.2vw" fontWeight="600" >
            <Text>Sign In / Register</Text>
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
}

export default Navbar;
