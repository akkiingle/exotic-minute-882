import {
  Image,
  Box,
  Button,
  Text,
  Container,
  HStack,
  VStack,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import React from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import Component8 from './Component8';

const HomePage = () => {
  return (
    <Box >
      {/* banner */}

      <Box
        // border="1px solid green"
        textAlign="center"
        position="relative"
        w={{ base: 'auto', sm: 'auto', md: 'auto', lg: '88%' }}
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
          h="300px"
          position="absolute"
          top="32px"
          left="32px"
          padding="20px"
          bg="white"
          display={{ base: 'none', md: 'none', lg: 'flex' }}
          flexDirection="column"
          justifyContent="space-between"
        >
          <Text fontSize="22px" fontWeight="500" textAlign="left">
            They're Here: Fall Fashion Trends
          </Text>
          <Text fontSize="18px" textAlign="left">
            That fall feeling is coming in hot with chunky knits, sleek
            trousers, and other key pieses fro the season!
          </Text>
          <Container
            // size="md"
            height="60px"
            width="300px"
            border="2px"
            borderRadius="md"
            paddingTop="6px"
            borderColor="black"
            _hover={{ bg: 'black', color: 'white' }}
          >
            <Text fontWeight="500" fontSize="16px">
              SHOP WOMEN'S FALL FASHION TRENDS
            </Text>
          </Container>
        </Box>
      </Box>

      {/* shop popular category */}

      <VStack w="80%" margin="auto" mt="40px">
        <Text w="100%" fontSize="25px" fontWeight="500" mb="1%">
          Shop Popular Categories
        </Text>
        <HStack
          // border="1px solid"
          margin="auto"
          display="grid"
          gridTemplateColumns={{
            base: 'repeat(2,1fr)',
            sm: 'repeat(2,1fr))',
            md: 'repeat(3,1fr)',
            lg: 'repeat(6,1fr)',
          }}
          gap="1%"
        >
          <Component1
            src="https://m.media-amazon.com/images/I/81crO3+x7YL._AC_SX255_.jpg"
            title="Sneakers & Athletic Shoes"
          />
          <Component1
            src="https://m.media-amazon.com/images/I/71AQ9q89+gL._AC_SX255_.jpg"
            title="Ankle Booties"
          />
          <Component1
            src="https://m.media-amazon.com/images/I/71uz3AedwVL._AC_SX255_.jpg"
            title="Lifestyle Sneakers"
          />
          <Component1
            src="https://m.media-amazon.com/images/I/61h70xJXNRL._AC_SX255_.jpg"
            title="Sandals On Sale"
          />
          <Component1
            src="https://m.media-amazon.com/images/I/81W8icKY5PL._AC_SX255_.jpg"
            title="Denim"
          />
          <Component1
            src="https://m.media-amazon.com/images/I/716Hx34WZnL._AC_SX255_.jpg"
            title="Loafers"
          />
        </HStack>
      </VStack>
      {/* component 2 */}

      <HStack
        w="80%"
        margin="auto"
        mt="50px"
        display="grid"
        gridTemplateColumns={{
          base: 'repeat(1,1fr)',
          sm: 'repeat(1,1fr)',
          md: 'repeat(3,1fr)',
          lg: 'repeat(3,1fr)',
        }}
        gap="2%"
        // border='1px solid'
      >
        <Component2
          src="https://m.media-amazon.com/images/G/01/2022/womens-shoes/WOMENS-HEELS-PUMPS-AUGUST-PROMO-500X500.jpg"
          title="Pumps, Stilettos, and Slingbacks, Oh My!"
          desc="Heels—the perfect excuse to dress up for every occasion!"
          link="SHOP HEELS YOU,LL LOVE"
        />
        <Component2
          src="https://m.media-amazon.com/images/G/01/2022/homepage9.19/BAGS-HANDBAGS-DESIGNER-FALL-PROMO-AUGUST-500X500.jpg"
          title="The Best in Designer Bags for Fall"
          desc="Invest in standout design that add a little oomph to your wardrobe!"
          link="SHOP TOP DESIGNER BAGS"
        />
        <Component2
          src="https://m.media-amazon.com/images/G/01/2022/homepage9.26/MENS-FALL-BASICS-SEPTEMBER-TRIPTYCH-500x500.jpg"
          title="Smart Style: Fall Footwear Basics"
          desc="Featuring chukkas, sneakers, oxfords, and other must-haves!"
          link="SHOP MEN'S FALL FOOTWEAR"
        />
      </HStack>

      {/* banner 2 */}

      <Image
        w="100%"
        margin="auto"
        mt="50px"
        src="https://m.media-amazon.com/images/G/01/Zappos/SITE-VIRTUAL-TRY-ON-HERO-1440x200.jpg"
      ></Image>

      {/* component 3 */}

      <HStack
        w="80%"
        margin="auto"
        mt="50px"
        display="grid"
        gridTemplateColumns={{
          base: 'repeat(1,1fr)',
          md: 'repeat(1,1fr)',
          lg: 'repeat(2,1fr)',
        }}
        gap="1%"
        justifyContent="center"
        // border="1px solid"
      >
        <Box
          bg="#ECCB9C"
          h={{ base: '585px', md: '585px', lg: '39vw' }}
          display="flex"
          alignItems="center"
          // w='98%'
        >
          <VStack
            // border="1px solid"
            spacing="3%"
            padding="0 9%"
            textAlign="center"
            // h='60%'
            w="100%"
          >
            <Image
              maxHeight="70%"
              maxWidth="100%"
              src="https://m.media-amazon.com/images/G/01/2022/homepage7.04/COOP-NEW-ARRIVAL-LOGO-1X-01_1.svg"
            ></Image>
            <Text fontSize="99%">
              SOREL: Experience fashion faves that'll have you feeling confident
              and comfy—whether you're at the pumpkin patch or hanging out with
              friends.
            </Text>
            <Button bg="transparent">SHOP NEW SOREL FOOTWEAR</Button>
          </VStack>
        </Box>
        <Image
          maxHeight="99%"
          maxWidth="100%"
          // border="1px solid"
          src="https://m.media-amazon.com/images/G/01/2022/homepage9.26/COOP-SOREL-NEW-ARRIVALS-DESKTOP-RIGHT-2X-1268x1268.jpg"
        ></Image>
      </HStack>

      {/* component 4 */}
      <Grid
        w="95%"
        margin="auto"
        templateColumns={{ base: '1fr', md: '1fr', lg: '30% 65%' }}
        mt="50px"
        gap="2%"
      >
        <VStack
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          gap="2%"
        >
          <Text fontSize="25px" fontWeight="500">
            Just-In Birkenstock: Cue the Cozy
          </Text>
          <Text fontSize="18px">
            Explore iconic designs featuring all-new teddy shearling for extra
            warmth, comfort, and style! Shop New Birkenstock Styles
          </Text>
          <Button bg="transparent" border="2px solid" textAlign="center">
            SHOP NEW BIRKENSTOCK STYLES
          </Button>
        </VStack>
        <GridItem>
          <Image src="https://m.media-amazon.com/images/G/01/2022/homepage9.26/COOP-BIRKENSTOCK-AOE-1920x1000.jpg"></Image>
        </GridItem>
      </Grid>

      {/* component 5  -- Popular items*/}

      {/* componete 6 */}

      <Grid
        w="95%"
        margin="auto"
        templateColumns={{ base: '1fr', md: '1fr', lg: '70% 27%' }}
        mt="50px"
        gap="1%"
      >
        <GridItem>
          <Image src="https://m.media-amazon.com/images/G/01/2022/the-style-room/FASHION-THE-STYLE-ROOM-7-FAM-CASUAL-FRIDAYS-SEPTEMBER-960x500.jpg"></Image>
        </GridItem>
        <VStack justifyContent="center" gap="2%" alignItems="start">
          <Image src="https://m.media-amazon.com/images/G/01/zappos/landing/opus/2021/homepage/thestyleroom/The-Style-Room-Logo.svg"></Image>
          <Text fontSize="25px" fontWeight="500">
            Where Will Your 7 For All Minkind Take You?
          </Text>
          <Text fontSize="20px">
            {' '}
            Fuse your everyday denim with endless chic style that are perfect
            for the busy week ahead.
          </Text>
          <Button bg="transparent" border="2px solid">
            SHOP 7 FOR ALL MANKIND
          </Button>
        </VStack>
      </Grid>

      {/* component 7 ---Trending brands */}

      {/* component 8 */}

      <Grid  w="95%"
        margin="auto"
        templateColumns={{ base: '1fr', md: '1fr', lg: 'repeat(3,1fr)' }}
        mt="50px"
        gap="1%"
        >
        <Component8
          src="https://m.media-amazon.com/images/G/01/zappos/landing/opus/2021/homepage/Zappos_ONE_Retina.png"
          title="Diversity Equity & Inclusion"
          desc="At Zaoops, diversity and individuality are central to our core values."
          link="LEARN MORE ABOUT ZAOOPS ONE PURPOSE"
        />
        <Component8
          src="https://m.media-amazon.com/images/G/01/2022/homepage2.08/Blank_500_x_500-491.jpg"
          title="Zaoops for Good"
          desc="Learn how to easily donate or recycle your secondhand items"
          link="EXPLORE ZAPPOS FOR GOOD"
        />
        <Component8
          src="https://m.media-amazon.com/images/G/01/zappos/landing/opus/2020/homepage/july/GGPromo.png"
          title="Goods for Good"
          desc="We're highlighting brands who are making a difference and helping build a better pakce for us all."
          link="SHOP GOOD FOR GOOD"
        />
      </Grid>
    </Box>
  );
};

export default HomePage;
