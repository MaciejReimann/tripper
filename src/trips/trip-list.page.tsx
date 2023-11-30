import { Container, SimpleGrid, Center, useTheme } from "@chakra-ui/react";
import pluralize from "pluralize";
import { useLoaderData } from "react-router-typesafe";
import { Link } from "react-router-dom";

import { tripsLoader } from "../router";
import { TripCard } from "./trip-list.card";
import { LearnMoreButton } from "./learn-more.button";
import { EmissionsOffsetDisplay } from "./emissions-offset.box";
import { TripRatingDisplay } from "./trip-rating.box";

interface TripListProps {}

export const TripListPage = ({}: TripListProps) => {
  const { trips } = useLoaderData<typeof tripsLoader>();

  // const theme = useTheme();

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
                  <Link
                    to={`/trips/${trip.id}`}
                    // TODO: investigate if it's even possible to call createRouter after msw is initialized AND get access to href
                    // https://github.com/fredericoo/react-router-typesafe
                    // https://github.com/mswjs/msw/issues/1653#issuecomment-1781867559
                    // to={createRouter().href({
                    //   path: "/trips/:tripId",
                    //   params: { tripId: String(trip.id) },
                    // })}
                  >
                    <LearnMoreButton />
                  </Link>
                }
                offsetComponent={
                  <EmissionsOffsetDisplay
                    width={"100%"}
                    value={trip.emissions}
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
