import React from "react";
import { Container, Center, CenterProps } from "@chakra-ui/react";

interface PageLayoutProps extends CenterProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children, ...centerProps }: PageLayoutProps) => {
  return (
    <Center w="100vw" backgroundColor="background.grey" {...centerProps}>
      <Container
        maxW="container.xl"
        centerContent
        paddingY={[4]}
        paddingX={[4, 8]}
      >
        {children}
      </Container>
    </Center>
  );
};
