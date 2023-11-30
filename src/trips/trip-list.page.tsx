import pluralize from "pluralize";
import { useLoaderData } from "react-router-typesafe";
import { Link } from "react-router-dom";
import { SimpleGrid, useTheme } from "@chakra-ui/react";

import { tripsLoader } from "../router";
import { PageLayout } from "./page.layout";
import { TripListCard } from "./trip-list.card";
import { LearnMoreButton } from "./learn-more.button";
import { EmissionsOffsetDisplay } from "./emissions-offset.box";
import { TripRatingDisplay } from "./trip-rating.box";

interface TripListProps {}

export const TripListPage = ({}: TripListProps) => {
  const { trips } = useLoaderData<typeof tripsLoader>();

  const theme = useTheme();
  console.log("theme", theme);

  return (
    <PageLayout>
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        {trips?.map((trip, index) => {
          return (
            <TripListCard
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
                <EmissionsOffsetDisplay width={"100%"} value={trip.emissions} />
              }
              ratingComponent={<TripRatingDisplay value={trip.rating} />}
            />
          );
        })}
      </SimpleGrid>
    </PageLayout>
  );
};

const formatTripInfo = (countriesCount: number, daysCount: number) => {
  const countries = pluralize("country", countriesCount, true);
  const days = pluralize("day", daysCount, true);

  return [countries, days].join(", ");
};
