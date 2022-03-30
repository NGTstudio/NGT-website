import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';

interface LoadingOverlayProps {
  hide: boolean;
}

const Component: React.FunctionComponent<LoadingOverlayProps> = ({
  hide,
}: LoadingOverlayProps) => {
  const { width, height } = useWindowSize();
  return (
    <Box
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: `${width || 0}px`,
        height: `${height || 0}px`,
        zIndex: 99,
        background: 'rgba(0,0,0,0.7)',
        display: hide ? 'none' : 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        pointerEvents: 'none',
      }}
    >
      <Image src={'/loading.gif'} w={160} />
    </Box>
  );
};

export default Component;
