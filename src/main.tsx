import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraUIProvider } from "./libs/chakra-ui/chakra-ui-provider";

import { TripList } from "./trips/trip-list";
import { TripLayout } from "./trip/trip.layout";

import App from "./App.tsx";

async function enableMocking() {
  // TODO: decide when we want to use msw
  // if (process.env.NODE_ENV !== "development") {
  //   return;
  // }

  const { worker } = await import("./mocks/browser");

  return worker.start();
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <TripList />,
  },
  {
    path: "/:tripId",
    element: <TripLayout />,
  },
]);

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <ChakraUIProvider>
        <RouterProvider router={router} />
      </ChakraUIProvider>
    </React.StrictMode>
  );
});
