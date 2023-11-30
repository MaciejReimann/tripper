import * as React from "react";
import {
  Card,
  CardHeader,
  Heading,
  Text,
  VStack,
  Flex,
  Box,
} from "@chakra-ui/react";

interface TripListCardProps {
  imageURL: string;
  title: string;
  info: string;
  buttonComponent: React.ReactNode;
  offsetComponent: React.ReactNode;
  ratingComponent: React.ReactNode;
}

export const TripListCard = ({
  imageURL,
  title,
  info,
  buttonComponent,
  offsetComponent,
  ratingComponent,
}: TripListCardProps) => {
  return (
    <Card
      padding={[3]}
      backgroundColor="background.white"
      borderRadius="xl"
      variant="elevated"
      shadow="xl"
    >
      <VStack
        backgroundImage={imageURL}
        background={`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${imageURL})`}
        borderRadius={"md"}
        padding={[6]}
        paddingBottom={0}
        height={"100%"}
        justifyContent="space-between"
      >
        <CardHeader paddingBottom={[0]}>
          <Heading
            size="md"
            color="text.white"
            textAlign="center"
            paddingY={[2]}
          >
            {title}
          </Heading>

          <Text color="text.white" fontSize="xs" textAlign="center">
            {info}
          </Text>
        </CardHeader>

        <Flex width="100%" paddingY={[4]} justifyContent="center">
          {buttonComponent}
        </Flex>

        {offsetComponent}

        <Box
          width="100%"
          paddingY={[4]}
          paddingX={[3]}
          backgroundColor="background.white"
          borderTopRadius="xl"
        >
          {ratingComponent}
        </Box>
      </VStack>
    </Card>
  );
};
