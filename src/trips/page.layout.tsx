import React from "react";
import { Container, Center } from "@chakra-ui/react";

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <Center w="100vw" backgroundColor="background.grey">
      <Container
        maxW="container.xxl"
        centerContent
        paddingY={[4]}
        paddingX={[4, 8]}
      >
        {children}
      </Container>
    </Center>
  );
};
