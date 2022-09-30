import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Component1 = ({ src, title }) => {
  return (
    <Box textAlign="center" paddingBottom="10px">
      <Box
        h={{
          base: '150px',
          sm: '150px',
          md: '220px',
          lg: '220px',
        }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="#F7FAFC"
      >
        <Image
          src={src}
          display="block"
          margin="auto"
          maxHeight="100%"
          maxWidth="100%"
        ></Image>
      </Box>
      <Text fontSize="16px" mt="2vh">
        {title}
      </Text>
    </Box>
  );
};

export default Component1;
