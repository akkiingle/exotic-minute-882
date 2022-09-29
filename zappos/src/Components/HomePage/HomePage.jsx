import { Image, Box, Button, Text, Container } from '@chakra-ui/react';
import React from 'react';

const HomePage = () => {
  return (
    <Box border="1px solid" >
      <Box
        border="1px solid green"
        textAlign="center"
        position="relative"
        w={{base:'auto', sm:'auto',md:'auto',lg:'76%'}}
        // w="76%"
        margin="auto"
      >
        <Image
          src="https://m.media-amazon.com/images/G/01/2022/homepage9.26/COOP-FALL-CAMPAGIN-WOMENS-STEVE-MADDEN-HERO-1440x700.jpg"
          margin="auto"
          //   w="80%"
        ></Image>

        <Box
          //   border="1px solid"
          w="350px"
          h="330px"
          position="absolute"
          top="32px"
          left="32px"
          padding="20px"
          bg="white"
          display={{base:'none',md:"none",lg:'flex'}}
          flexDirection="column"
          justifyContent="space-between"
        >
          <Text fontSize="25px" fontWeight="500" textAlign="left">
            They're Here: Fall Fashion Trends
          </Text>
          <Text fontSize="20px" textAlign="left">
            That fall feeling is coming in hot with chunky knits, sleek
            trousers, and other key pieses fro the season!
          </Text>
          <Container
            // size="md"
            height="70px"
            width="300px"
            border="2px"
            borderRadius='md'
            paddingTop="10px"
            borderColor="black"
            _hover={{ bg: 'black', color: 'white' }}
          >
            <Text fontWeight='500' fontSize='17px'>SHOP WOMEN'S FALL FASHION TRENDS</Text>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
