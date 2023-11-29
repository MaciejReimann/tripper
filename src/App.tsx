import * as React from "react";

import { TripList } from "./trips/trip-list";

/*
 * Requirements:
 * X The website should be responsive and built with ReactJS functional components and Typescript
 * X ChakraUI should be used for UI components
 * X Data should be downloaded asynchronously from a mock server - serving json files (any technology)
 * ● Details of a trip should be pulled from a separate single-trip endpoint
 * ● New cards should be loaded on page scroll (infinite scrolling)
 * ● Data from the server should be cached and preserved between pages
 * ● The code should be placed in any repository along with instructions on how to run the project
 * ● [Nice to have] Unit tests
 */

function App() {
  return (
    <>
      <TripList />
    </>
  );
}

export default App;
