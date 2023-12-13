import { Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm" marginBottom={5}>
        {new Date().getFullYear()}{' '}
        <Link
          href="https://rannnayy.github.io"
          isExternal
          rel="noopener noreferrer"
        >
          @rannnayyy -{' '}
        </Link>
        (template by{' '}
        <Link
          href="https://nextarter-chakra.sznm.dev/"
          isExternal
          rel="noopener noreferrer"
        >
          sznm.dev
        </Link>
        )
      </Text>
    </Flex>
  );
};

export default Footer;
