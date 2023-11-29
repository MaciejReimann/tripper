import * as React from "react";

import { Container, SimpleGrid, Center, useTheme } from "@chakra-ui/react";

import { fetchTrips, Trip } from "./fetch-trips";

import { TripCard } from "./trip-card";

interface TripListProps {}

export const TripList = ({}: TripListProps) => {
  const [trips, setTrips] = React.useState<Trip[] | undefined>(undefined);

  React.useEffect(() => {
    const getTrips = async () => {
      const trips = await fetchTrips();
      setTrips(trips);
    };
    getTrips();
  }, []);

  const theme = useTheme();

  if (theme) {
    console.log(theme);
  }

  return (
    <Center w="100vw" backgroundColor="background.grey">
      <Container maxW="container.xl" centerContent>
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
          {trips?.map((trip, index) => {
            return (
              <TripCard
                key={trip.title + index}
                title={trip.title}
                imageURL={trip.photoUrl}
              />
            );
          })}
        </SimpleGrid>
      </Container>
    </Center>
  );
};
