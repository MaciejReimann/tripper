import { typesafeBrowserRouter, LoaderFunction } from "react-router-typesafe";

import { fetchTrips, fetchTrip } from "./trips/fetch-trips";
import { TripListPage } from "./trips/trip-list.page.tsx";
import { TripDetailsPage } from "./trips/trip-details.page.tsx";

// Allows us to preserve type safety across router's loaders
// Reference: https://github.com/fredericoo/react-router-typesafe
export const tripsLoader = (async () => {
  const trips = await fetchTrips();

  return { trips };
}) satisfies LoaderFunction;

export const tripLoader = (async ({ params }) => {
  if (!params.tripId) {
    throw new Error("tripId is required");
  }

  const trip = await fetchTrip(params.tripId);

  return { trip };
}) satisfies LoaderFunction;

// createBrowserRouter needs to be called after MSW is initialized
// Reference: https://github.com/mswjs/msw/issues/1653#issuecomment-1781867559
export const createRouter = () =>
  typesafeBrowserRouter([
    {
      path: "/",
      element: <TripListPage />,
      loader: tripsLoader,
    },

    {
      path: `/trips/:tripId`,
      element: <TripDetailsPage />,
      loader: tripLoader,
    },
  ]);
