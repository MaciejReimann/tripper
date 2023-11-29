import * as React from "react";

import {
  Card,
  CardHeader,
  Heading,
  Text,
  Button,
  VStack,
  Flex,
  FlexProps,
} from "@chakra-ui/react";

interface TripCardProps {
  imageURL: string;
  title: string;
}

export const TripCard = ({ imageURL, title }: TripCardProps) => {
  return (
    <Card
      padding={[3]}
      backgroundColor="background.white"
      borderRadius={"xl"}
      variant={"elevated"}
    >
      <VStack
        backgroundImage={imageURL}
        background={`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${imageURL})`}
        borderRadius={"md"}
        padding={[6]}
      >
        <CardHeader>
          <Heading size="md" color="text.white" textAlign={"center"}>
            {title}
          </Heading>
        </CardHeader>

        <LearnMoreButton />

        <EmissionsOffsetDisplay width={"100%"} value={100} />
      </VStack>
    </Card>
  );
};

const LearnMoreButton = () => {
  return (
    <Button variant="solid" backgroundColor="button.blue" color="text.white">
      Learn More
    </Button>
  );
};

interface EnmissionsDisplayProps extends FlexProps {
  value: number;
  text?: string;
}
const EmissionsOffsetDisplay = ({
  text = "Emissions offset:",
  value,
  ...flexProps
}: EnmissionsDisplayProps) => {
  return (
    <Flex
      backgroundColor="background.darkBlue"
      justifyContent={"space-between"}
      padding={[3]}
      borderRadius={"xl"}
      {...flexProps}
    >
      <Text color="text.white" fontSize="sm">
        {text}
      </Text>
      {value}
    </Flex>
  );
};
