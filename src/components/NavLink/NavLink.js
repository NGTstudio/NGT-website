import { Link, useColorModeValue } from '@chakra-ui/react';
const NavLink = ({ children }) => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: bgColor,
      }}
      href={'#'}
    >
      {children}
    </Link>
  );
};

export default NavLink;
