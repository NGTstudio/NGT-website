import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  const ItemCard = ({emoji, title, description}) => {
    return (
      <Center py={6}>
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Heading size="2xl">
              {emoji}
          </Heading>
          <Heading pt={4} fontSize={'xl'} fontFamily={'body'}>
        {title}
          </Heading>
          <Text
            textAlign={'center'}
            opacity={0.66}
            px={3} pt={4}>
            {description}
          </Text>
        </Box>
      </Center>
    );
  }

export default ItemCard;