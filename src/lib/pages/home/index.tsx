'use client';

import {
  Flex,
  Image,
  Text,
  Link,
  Divider,
  Center,
  HStack,
  Circle,
  Square,
  Stack,
  useColorModeValue,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

import TypewriterText from '~/lib/components/samples/TypewriterText';

const Home = () => {
  const textColor = useColorModeValue('black', 'white');

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <Image
        borderRadius="full"
        boxSize="30vh"
        src="/Rani-sq.jpg"
        alt="Rani"
        margin={0}
      />
      <TypewriterText text="Maharani A. P. Irawan" />
      <Text
        fontSize="medium"
        fontStyle="italic"
        marginTop={0}
        paddingTop={0}
        textAlign="center"
      >
        Hi! I&aposm Rani, a senior Computer Science undergraduate researcher{' '}
        <br />
        at Bandung Institute of Technology. <br />
        I&aposm currently applying for a Ph.D. in systems. <br />
        Reach me through <Link href="mailto:rani.api3939@gmail.com">email</Link>
        .
      </Text>

      {/* External Links */}
      <HStack>
        <Link href="https://linkedin.com/in/rannnayy">
          <Square size="40px" bg="white" color="blue.700" padding={0}>
            <IoLogoLinkedin size="100%" />
          </Square>
        </Link>

        <Link href="https://github.com/rannnayy">
          <Circle size="40px" bg="white" color="purple" padding={0}>
            <IoLogoGithub size="100%" />
          </Circle>
        </Link>

        <Link
          href="/files/CVRani-PhDApplication.pdf"
          target="_blank"
          rel="noopener noreferrer"
          locale={false}
        >
          <Square size="40px" bg="white" color="black" padding={0}>
            <Text fontSize="x-large">CV</Text>
          </Square>
        </Link>
      </HStack>

      {/* The content */}
      <Center w={['95%', '75%', '60%', '50%']} color={textColor}>
        <Stack direction="column" w="full">
          <Divider orientation="horizontal" size="10vh" />
          <Text fontSize="x-large" fontWeight="extrabold">
            Research Interest
          </Text>
          <Text fontStyle="italic">
            Machine learning for systems, systems for machine learning,
            operating systems, storage systems, distributed systems.
          </Text>

          <Divider orientation="horizontal" />
          <Text fontSize="x-large" fontWeight="extrabold">
            News
          </Text>
          <UnorderedList>
            <ListItem>12/12/2023: Hi! Welcome to my homepage!</ListItem>
          </UnorderedList>

          <Divider orientation="horizontal" />
          <Text fontSize="x-large" fontWeight="extrabold">
            Publications
          </Text>
          <Text>
            <b>
              FlashNet: Cutting Storage Tail Latency with Machine Learning
              Engineered on Extensible Data-Science Framework.
            </b>{' '}
            Manuscript is available upon request. In preparation, 2023.
          </Text>

          <Divider orientation="horizontal" />
          <Text fontSize="x-large" fontWeight="extrabold">
            Teaching
          </Text>
          <Text fontStyle="italic" />
        </Stack>
      </Center>
    </Flex>
  );
};

export default Home;
