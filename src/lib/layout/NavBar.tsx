import { Box, Flex, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';

import ThemeToggle from './ThemeToggle';
import WebLogo from './WebLogo';

interface IProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuToggle: React.FC<IProps> = ({ setIsOpen, isOpen }) => {
  return (
    <Box
      display={{ base: 'block', md: 'none' }}
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? <IoClose /> : <IoMenu />}
    </Box>
  );
};

interface MenuItemProps {
  to?: string;
  text: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ to = '/', text }) => {
  const textColor = useColorModeValue('black', 'white');

  return (
    <Link href={to}>
      <Text display="block" color={textColor}>
        {text}
      </Text>
    </Link>
  );
};

interface NavBarContainerProps {
  children?: React.ReactNode;
}

const NavBarContainer: React.FC<NavBarContainerProps> = ({
  children,
  ...props
}) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      color={['white', 'white', 'primary.700', 'primary.700']}
      {...props}
    >
      {children}
    </Flex>
  );
};

const NavBar: React.FC = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <NavBarContainer {...props}>
      <WebLogo />
      <MenuToggle setIsOpen={setIsOpen} isOpen={isOpen} />
      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Stack
          spacing={8}
          align="center"
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to="/" text="Home" />
        </Stack>
      </Box>
      <ThemeToggle />
    </NavBarContainer>
  );
};

export default NavBar;
