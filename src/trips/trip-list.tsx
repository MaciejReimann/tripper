import * as React from "react";
import { Container, SimpleGrid, Center, useTheme } from "@chakra-ui/react";
import pluralize from "pluralize";
import { Link } from "react-router-dom";

import { fetchTrips, Trip } from "./fetch-trips";
import { TripCard } from "./trip-card";
import { LearnMoreButton } from "./learn-more.button";
import { EmissionsOffsetDisplay } from "./emissions-offset-display";
import { TripRatingDisplay } from "./trip-rating-display";

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
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {trips?.map((trip, index) => {
            return (
              <TripCard
                key={trip.title + index}
                imageURL={trip.photoUrl}
                title={trip.title}
                info={formatTripInfo(trip.countries.length, trip.days)}
                buttonComponent={
                  <LearnMoreButton
                    renderChildren={(text) => (
                      <Link to={`/${trip.id}`}>{text}</Link>
                    )}
                  />
                }
                offsetComponent={
                  <EmissionsOffsetDisplay
                    width={"100%"}
                    value={trip.co2kilograms}
                  />
                } // TODO: use Value Object
                ratingComponent={<TripRatingDisplay value={trip.rating} />}
              />
            );
          })}
        </SimpleGrid>
      </Container>
    </Center>
  );
};

const formatTripInfo = (countriesCount: number, daysCount: number) => {
  const countries = pluralize("country", countriesCount, true);
  const days = pluralize("day", daysCount, true);

  return [countries, days].join(", ");
};
