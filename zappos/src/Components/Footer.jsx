import { EmailIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <VStack spacing="" mt={{ base: '50px', sm: '80px', md: '50px' }}>
      {/* top section */}
      <Box bg="#032C48" w="100%" padding="20px 0px">
        <VStack
          bg="#032C48"
          w="90%"
          color="white"
          margin="auto"
          alignItems="start"
        >
          <Text fontSize="20px">Make Zappos (Emails) Your new BFF!</Text>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <HStack
              display="flex"
              flexDirection={{
                base: 'column',
                sm: 'column',
                md: 'row',
                lg: 'row',
              }}
              alignItems="start"
              gap="5"
            >
              <Input
                type="email"
                w="300px"
                bg="white"
                placeholder="Email Address"
              />
              <Button
                mt={4}
                bg="transparent"
                type="submit"
                border="2px solid white"
                w="300px"
                leftIcon={<EmailIcon />}
              >
                SUBSCRIBE TO ZAOOPS EMAIL
              </Button>
            </HStack>
          </FormControl>
        </VStack>
      </Box>

      {/* Middle Section */}
      <Grid
        bg="#003953"
        color="white"
        templateColumns={{
          base: 'repeat(1,1fr)',
          sm: 'repeat(2,1fr)',
          md: 'repeat(2,1fr)',
          lg: 'repeat(4,1fr)',
        }}
        padding="20px 5%"
        gap="10"
      >
        <VStack alignItems="start">
          <Text fontSize="18px" fontWeight="500">
            Explore Zappos
          </Text>
          <VStack alignItems="start" spacing="">
            <Text>Brands</Text>
            <Text>Clothing</Text>
            <Text>The Style Room</Text>
            <Text>Eyewear</Text>
            <Text>New Arrivals</Text>
            <Text>Running</Text>
            <Text>Jackets</Text>
            <Text>Shoes</Text>
            <Text>Watches</Text>
            <Text>Zappos Adaptive</Text>
            <Text>Education & Military Discounts</Text>
            <Text>All Departments</Text>
          </VStack>
        </VStack>

        <VStack alignItems="start" spacing="25px">
          <VStack alignItems="start">
            <Text fontSize="18px" fontWeight="500">
              Customer Service
            </Text>
            <VStack alignItems="start" spacing="">
              <Text>FAQs</Text>
              <Text>Contact Info</Text>
              <Text>¿Ayuda en español?</Text>
              <Text>Shipping And Returns Policy</Text>
              <Text>About Proposition 65</Text>
            </VStack>
          </VStack>
          <VStack alignItems="start">
            <Text fontSize="18px" fontWeight="500">
              Fit Info
            </Text>
            <VStack alignItems="start" spacing="">
              <Text>Measurement Guide</Text>
              <Text>Size Conversion Chart</Text>
              <Text>Measure Your Bra Size</Text>
            </VStack>
          </VStack>
        </VStack>

        <VStack alignItems="start" spacing="25px">
          <VStack alignItems="start">
            <Text fontSize="18px" fontWeight="500">
              About Zappos
            </Text>
            <VStack alignItems="start" spacing="">
              <Text>About</Text>
              <Text>Zappos ONE</Text>
              <Text>Zappos for Good</Text>
              <Text>Get the Zappos Mobile App</Text>
              <Text>Amazon Prime Benefits</Text>
              <Text>Zappos VIP Benefits</Text>
              <Text>Powered by Zappos</Text>
              <Text>Coupons</Text>
              <Text>Accessibility Statement</Text>
              <Text>Beyond the Box Blog</Text>
            </VStack>
          </VStack>
          <VStack alignItems="start">
            <Text fontSize="18px" fontWeight="500">
              Resources
            </Text>
            <VStack alignItems="start" spacing="">
              <Text>Associates Program</Text>
              <Text>Influencer Program</Text>
              <Text>Jobs</Text>
              <Text>Press Kit & Brand Inquiries</Text>
              <Text>Site Map</Text>
            </VStack>
          </VStack>
        </VStack>

        <VStack alignItems="start" spacing="25px">
          <VStack
            bg="#144860"
            padding="15px"
            spacing="4"
            alignItems="start"
            borderRadius="5"
          >
            <Text fontSize="18px" fontWeight="500">
              Your Voice Matters
            </Text>
            <Text>
              We'd love to learn more about your shopping experiences on
              Zappos.com and how we can improve!
            </Text>
            <Button bg="transparent" border="2px solid white">
              TAKE SURVEY
            </Button>
          </VStack>
          <VStack alignItems="start">
            <Text fontSize="18px" fontWeight="500">
              Connect With Us
            </Text>
            <Flex  gap='2'>
              <Image
                bg="transparent"
                filter="invert(100%)"
                boxSize="30px"
                src="https://cdn-icons-png.flaticon.com/512/3488/3488299.png"
              ></Image>
              <Image
                bg="transparent"
                color='white'
                boxSize="30px"
                filter="invert(100%)"
                src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"
              ></Image>
              <Image
                bg="transparent"
                color='white'
                boxSize="30px"
                filter="invert(100%)"
                src="https://cdn-icons-png.flaticon.com/512/733/733635.png"
              ></Image>
              <Image
                bg="transparent"
                color='white'
                boxSize="30px"
                filter="invert(100%)"
                src="https://cdn-icons-png.flaticon.com/512/2175/2175205.png"
              ></Image>
              <Image
                bg="transparent"
                color='white'
                boxSize="30px"
                filter="invert(100%)"
                src="https://cdn-icons-png.flaticon.com/512/1384/1384028.png"
              ></Image>
            </Flex>
          </VStack>
        </VStack>
      </Grid>

      {/* bottom section */}
      <Divider />

      <VStack
        bg="#003953"
        color="white"
        w="100%"
        alignItems="start"
        padding="20px 5%"
      >
        <HStack>
          <Text>Terms of Use</Text>
          <Center height="20px">
            <Divider orientation="vertical" size="1px" />
          </Center>
          <Text>Privacy Policy</Text>
          <Center height="20px">
            <Divider orientation="vertical" size="1px" />
          </Center>
          <Text>Fur Policy</Text>
          <Center height="20px">
            <Divider orientation="vertical" size="1px" />
          </Center>
          <Text>Interest-Based Ads</Text>
          <Center height="20px">
            <Divider orientation="vertical" size="1px" />
          </Center>
          <Text>24/7 Customer Service (800) 927-7671</Text>
        </HStack>
        <Text>© 2009-2022 - Zappos.com LLC or its affiliates</Text>
      </VStack>
    </VStack>
  );
};

export default Footer;
