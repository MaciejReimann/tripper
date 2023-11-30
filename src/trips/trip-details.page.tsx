import * as React from "react";
import { useLoaderData } from "react-router-typesafe";
import pluralize from "pluralize";
import {
  Flex,
  Image,
  Card,
  Heading,
  Text,
  UnorderedList,
  List,
  ListItem,
  CardHeader,
  VStack,
  Box,
  Divider,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { RiFlag2Line } from "react-icons/ri";
import { PiSuitcaseSimple } from "react-icons/pi";
import { BiWorld } from "react-icons/bi";
import { GoPeople } from "react-icons/go";

import { tripLoader } from "../router";
import { TripDetailsLayout } from "./trip-details.layout";

interface TripDetailsPageProps {
  children?: React.ReactNode;
}

export const TripDetailsPage = ({}: TripDetailsPageProps) => {
  const { trip } = useLoaderData<typeof tripLoader>();

  return (
    <TripDetailsLayout
      heading={
        <Flex direction="column">
          <Heading as="h1" size="lg" color="text.darkBlue" paddingY={[2]}>
            {trip.title}
          </Heading>

          <Text color="text.black" fontSize="xs">
            {trip.subtitle}
          </Text>
        </Flex>
      }
      leftSide={
        <Flex flexDirection="column" color="text.grey">
          <Image src={trip.photoUrl} width="100%" borderRadius="xl" />

          <Box paddingTop={[6]}>
            <Heading as="h2" size="sm" fontWeight="bold" paddingBottom={[6]}>
              Overview:
            </Heading>

            <List
              display="flex"
              width="100%"
              flexWrap="wrap"
              justifyContent={["space-between"]}
              gap={[3]}
            >
              {trip.advantages.map((advantage) => {
                return (
                  <ListItem
                    width="48%"
                    display="flex"
                    gap={[3]}
                    flexDirection="row"
                    paddingBottom={[4]}
                  >
                    <Box marginTop={[-1]}>
                      {getIconForAdvantageTitle(advantage.title)}
                    </Box>

                    <Flex flexDirection="column">
                      <Heading
                        as="h3"
                        size="sm"
                        fontWeight="bold"
                        paddingBottom={[2]}
                      >
                        {advantage.title}
                      </Heading>
                      <Text fontSize="xs">{advantage.description}</Text>
                    </Flex>
                  </ListItem>
                );
              })}
            </List>

            <Divider orientation="horizontal" paddingTop={[5]} />
          </Box>

          <Text
            color="text.black"
            fontSize="md"
            fontWeight="md"
            paddingTop={[8]}
          >
            {trip.description}
          </Text>
        </Flex>
      }
      rightSide={
        <Card padding={[6]} borderRadius="xl" color="text.grey">
          <VStack
            borderRadius="md"
            paddingBottom={0}
            height="100%"
            alignItems="flex-start"
          >
            <CardHeader
              padding={[0]}
              justifyContent={["center", "start"]}
              width="100%"
            >
              <Heading
                size="md"
                color="text.darkGrey"
                textAlign="start"
                paddingBottom={[2]}
              >
                {pluralize("day", trip.days, true)}
              </Heading>

              <Text fontSize="xs" fontWeight="bold" as="sub">
                {`Emissions: ${trip.emissions.toString()}`}
              </Text>
            </CardHeader>

            <Divider orientation="horizontal" paddingTop={[3]} />

            <Text fontSize="xs" fontWeight="bold" paddingTop={[3]}>
              Countries included:
            </Text>

            <UnorderedList
              display="flex"
              width="100%"
              flexWrap="wrap"
              marginTop={[-2]}
            >
              {trip.countries.map((country) => {
                return (
                  <ListItem width="50%">
                    <Text fontSize="xs">{country}</Text>
                  </ListItem>
                );
              })}
            </UnorderedList>
          </VStack>
        </Card>
      }
    />
  );
};

const getIconForAdvantageTitle = (advantageTitle: string) => {
  const key = advantageTitle.split(" ")[0];
  const mapping = {
    "1st": <Icon boxSize={6} w={8} h={8} as={RiFlag2Line} />,
    "2nd": <Icon boxSize={6} w={8} h={8} as={PiSuitcaseSimple} />,
    "3rd": <Icon boxSize={6} w={8} h={8} as={BiWorld} />,
    "4th": <Icon boxSize={6} w={8} h={8} as={GoPeople} />,
  };

  try {
    return mapping[key as keyof typeof mapping];
  } catch {
    throw new Error(`No icon specified for advantage title: ${advantageTitle}`);
  }
};
