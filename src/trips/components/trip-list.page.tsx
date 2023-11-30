import pluralize from "pluralize";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { SimpleGrid, Progress } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";

import { fetchTrips } from "../fetch-trips";
import { PageLayout } from "./page.layout";
import { TripListCard } from "./trip-list.card";
import { LearnMoreButton } from "./learn-more.button";
import { EmissionsOffsetBox } from "./emissions-offset.box";
import { TripRatingDisplay } from "./trip-rating.box";

interface TripListProps {}

export const TripListPage = ({}: TripListProps) => {
  const {
    isError,
    isLoading,
    isSuccess,
    data: trips,
  } = useQuery("trips", fetchTrips);

  const fetchNext = () => {};

  return (
    <PageLayout>
      {isLoading && <Progress size="xs" isIndeterminate />}

      {isSuccess && (
        <InfiniteScroll
          dataLength={trips?.length ?? 0}
          next={() => fetchNext()}
          style={{ display: "flex", flexDirection: "column-reverse" }} //To put endMessage and loader to the top.
          inverse={true} //
          hasMore={true}
          loader={<h4>Loading...</h4>}
          // scrollableTarget="scrollableDiv"
        >
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
                    <EmissionsOffsetBox width={"100%"} value={trip.emissions} />
                  }
                  ratingComponent={<TripRatingDisplay value={trip.rating} />}
                />
              );
            })}
          </SimpleGrid>
        </InfiniteScroll>
      )}
    </PageLayout>
  );
};

const formatTripInfo = (countriesCount: number, daysCount: number) => {
  const countries = pluralize("country", countriesCount, true);
  const days = pluralize("day", daysCount, true);

  return [countries, days].join(", ");
};
