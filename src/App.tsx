import * as React from "react";

import trips from "./trips/trips.json";

/*
 * Requirements:
 * ● The website should be responsive and built with ReactJS functional components and Typescript
 * ● ChakraUI should be used for UI components
 * ● Data should be downloaded asynchronously from a mock server - serving json files (any technology)
 * ● Details of a trip should be pulled from a separate single-trip endpoint
 * ● New cards should be loaded on page scroll (infinite scrolling)
 * ● Data from the server should be cached and preserved between pages
 * ● The code should be placed in any repository along with instructions on how to run the project
 * ● [Nice to have] Unit tests
 */

function App() {
  console.log(trips);

  return <>Trips</>;
}

export default App;