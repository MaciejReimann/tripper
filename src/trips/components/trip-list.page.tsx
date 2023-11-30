import * as React from "react";
import pluralize from "pluralize";
import { Link } from "react-router-dom";
import { useInfiniteQuery } from "react-query";
import { SimpleGrid, Progress } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

import { fetchTrips } from "../fetch-trips";
import { PageLayout } from "./page.layout";
import { TripListCard } from "./trip-list.card";
import { LearnMoreButton } from "./learn-more.button";
import { EmissionsOffsetBox } from "./emissions-offset.box";
import { TripRatingDisplay } from "./trip-rating.box";

interface TripListProps {}

const batchSize = 10;

export const TripListPage = ({}: TripListProps) => {
  const { ref, inView } = useInView();

  const {
    data,
    isLoading,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery("trips", ({ pageParam = 1 }) => fetchTrips(pageParam), {
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        lastPage.length === batchSize ? allPages.length + 1 : undefined;
      return nextPage;
    },
  });

  const loadedTrips = !isSuccess
    ? []
    : data.pages.map((page) =>
        page.map((trip, index) => {
          return (
            <TripListCard
              ref={page.length === index + 1 ? ref : undefined}
              key={trip.id}
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
                <EmissionsOffsetBox width={"100%"} value={trip.emissions} />
              }
              ratingComponent={<TripRatingDisplay value={trip.rating} />}
            />
          );
        })
      );

  React.useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <PageLayout>
      {isLoading && <Progress size="lg" isIndeterminate />}

      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        {loadedTrips}

        {isFetchingNextPage && <h3>Loading...</h3>}
      </SimpleGrid>
    </PageLayout>
  );
};

const formatTripInfo = (countriesCount: number, daysCount: number) => {
  const countries = pluralize("country", countriesCount, true);
  const days = pluralize("day", daysCount, true);

  return [countries, days].join(", ");
};
