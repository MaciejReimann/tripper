import { typesafeBrowserRouter } from "react-router-typesafe";

import { TripListPage } from "./trips/components/trip-list.page.tsx";
import { TripDetailsPage } from "./trips/components/trip-details.page.tsx";

// createBrowserRouter needs to be called after MSW is initialized
// Reference: https://github.com/mswjs/msw/issues/1653#issuecomment-1781867559

export const createRouter = () =>
  typesafeBrowserRouter([
    {
      path: "/",
      element: <TripListPage />,
      // loader: tripsLoader,
    },

    {
      path: `/trips/:tripId`,
      element: <TripDetailsPage />,
      // loader: tripLoader,
    },
  ]);
