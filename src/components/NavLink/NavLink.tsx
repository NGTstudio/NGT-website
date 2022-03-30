import { Link, useColorModeValue } from '@chakra-ui/react';
import LinkNext from 'next/link';
import React from 'react';
import ReactGA from 'react-ga4';
//import type { AnalyticsEventProps } from '../Nav';

interface AnalyticsEventProps {
  category: string;
  action: string;
  label: string;
}

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  analyticsEvent: AnalyticsEventProps;
}

const NavLink: React.FunctionComponent<NavLinkProps> = ({
  children,
  href,
  analyticsEvent,
}: NavLinkProps) => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');

  const _onClick = () => {
    if (analyticsEvent) {
      ReactGA.event(analyticsEvent);
    }
  };

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
      href={href || '#'}
      onClick={_onClick}
    >
      {children}
    </Link>
  );
};

export default NavLink;
