import { Link, useColorModeValue } from '@chakra-ui/react';
import { Link as LinkNext } from "next/link";
import ReactGA from 'react-ga4';

const NavLink = ({ children, href, analyticsEvent }) => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');

  const _onClick = () => {
    if(analyticsEvent) {
      ReactGA.event(analyticsEvent);
    }
  }

  return (
    <Link
     as={LinkNext}
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: bgColor,
      }}
      href={href || "#"}
      onClick={_onClick}
    >
      {children}
    </Link>
  );
};

export default NavLink;
