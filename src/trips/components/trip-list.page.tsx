import * as React from "react";
import pluralize from "pluralize";
import { Link } from "react-router-dom";
import { useInfiniteQuery } from "react-query";
import { SimpleGrid, Progress, Box } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

import { href } from "../../router";
import { fetchTrips } from "../fetch-trips";
import { PageLayout } from "./page.layout";
import { ApiErrorAlert } from "./api-error.alert";
import { TripListCard } from "./trip-list.card";
import { LearnMoreButton } from "./learn-more.button";
import { EmissionsOffsetBox } from "./emissions-offset.box";
import { TripRatingDisplay } from "./trip-rating.box";

interface TripListProps {}

const batchSize = 9;

export const TripListPage = ({}: TripListProps) => {
  const { ref, inView } = useInView();

  const {
    data,
    isError,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    "trips",
    ({ pageParam = 1 }) => fetchTrips(batchSize, pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage =
          lastPage.length === batchSize ? allPages.length + 1 : undefined;
        return nextPage;
      },
    }
  );

  React.useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (!data) {
    return (
      <>
        {isError && <ApiErrorAlert />}
        {isLoading && <Progress size="xs" isIndeterminate />}
      </>
    );
  }

  return (
    <>
      <PageLayout>
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {data?.pages.map((page) =>
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
                      to={href({
                        path: "/trips/:tripId",
                        params: { tripId: String(trip.id) },
                      })}
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
          )}
        </SimpleGrid>
      </PageLayout>
      {isFetchingNextPage && (
        <Box width="100vw" height={[12]}>
          <Progress size="xs" isIndeterminate />
        </Box>
      )}
    </>
  );
};

const formatTripInfo = (countriesCount: number, daysCount: number) => {
  const countries = pluralize("country", countriesCount, true);
  const days = pluralize("day", daysCount, true);

  return [countries, days].join(", ");
};
