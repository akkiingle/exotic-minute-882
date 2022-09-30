import { Box, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Component2 = ({src,title,desc,link}) => {
  return (
   <VStack textAlign='center'>
    <Image src={src} alt='shoeImage'></Image>
    <Text fontWeight='500' fontSize='18px'>{title}</Text>
    <Text fontSize='17px'>{desc}</Text>
    <Text as='u' fontWeight='500' fontSize='14px'>{link}</Text>
   </VStack>
  );
}

export default Component2;
