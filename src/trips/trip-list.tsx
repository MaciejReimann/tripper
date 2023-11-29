import * as React from "react";

import { fetchTrips, Trip } from "./fetch-trips";

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

  if (trips) {
    console.log(trips[0]);
  }

  return trips?.map((trip, index) => (
    <div key={trip.title + index}>{trip.title}</div>
  ));
};
