'use client';

import { Grid, useColorModeValue } from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';

type HelperTypewriterText = {
  text: string;
};

const TypewriterText = ({ text = '' }: HelperTypewriterText) => {
  const textColor: string = useColorModeValue('black', 'white');
  const highlightColor: string = textColor === 'white' ? 'maroon' : 'beige';

  return (
    <Grid
      textAlign="center"
      fontSize="xxx-large"
      fontStyle="bold"
      bgColor={highlightColor}
    >
      <Typewriter
        options={{
          strings: text,
          autoStart: true,
          loop: true,
          pauseFor: 3000,
        }}
      />
    </Grid>
  );
};

export default TypewriterText;
