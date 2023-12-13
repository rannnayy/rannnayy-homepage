'use client';

import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import Footer from './Footer';
import NavBar from './NavBar';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="auto" transition="0.5s ease-out">
      <Box margin="0">
        <NavBar />
        <Box as="main" marginY={0}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
