import { typesafeBrowserRouter } from "react-router-typesafe";

import { TripListPage } from "./trips/components/trip-list.page.tsx";
import { TripDetailsPage } from "./trips/components/trip-details.page.tsx";

export const { href, router } = typesafeBrowserRouter([
  {
    path: "/",
    element: <TripListPage />,
  },

  {
    path: `/trips/:tripId`,
    element: <TripDetailsPage />,
  },
]);
