import * as React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    button: {
      blue: "#4066bd",
    },
    background: {
      grey: "#f5f5f6",
      white: "#fff",
      darkBlue: "#151a2f",
    },
    text: {
      white: "#fff",
    },
  },
});

interface CustomizedChakraProviderProps {
  children: React.ReactNode;
}

export const ChakraUIProvider = ({
  children,
}: CustomizedChakraProviderProps) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
