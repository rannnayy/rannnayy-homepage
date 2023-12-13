import { IconButton, useColorMode } from '@chakra-ui/react';
import { AiFillTrademarkCircle, AiOutlineTrademark } from 'react-icons/ai';

const WebLogo = () => {
  const { colorMode } = useColorMode();

  return (
    <IconButton
      aria-label="web logo"
      icon={
        colorMode === 'light' ? (
          <AiFillTrademarkCircle size="100%" />
        ) : (
          <AiOutlineTrademark size="100%" />
        )
      }
      padding={0}
    />
  );
};

export default WebLogo;
