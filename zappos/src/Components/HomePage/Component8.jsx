import { Grid, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Component8 = ({src,title,desc,link}) => {
  return (
    <VStack w={{base:'100%',sm:'55%',md:'55%',lg:'100%'}} margin={{base:'0',sm:'auto',md:'auto',lg:'0'}}>
        <Image src={src}></Image>
        <Text fontSize='20px' fontWeight='500'>{title}</Text>
        <Text>{desc}</Text>
        <Text as='u' fontWeight='500'>{link}</Text>
        
    </VStack>
  );
}

export default Component8;
