import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ChakraUIProvider } from "./libs/chakra-ui/chakra-ui-provider";

import { createRouter } from "./router";

/*
 * Requirements:
 * X The website should be responsive and built with ReactJS functional components and Typescript
 * X ChakraUI should be used for UI components
 * X Data should be downloaded asynchronously from a mock server - serving json files (any technology)
 * X Details of a trip should be pulled from a separate single-trip endpoint
 * ● New cards should be loaded on page scroll (infinite scrolling)
 * ● Data from the server should be cached and preserved between pages
 * ● The code should be placed in any repository along with instructions on how to run the project
 * ● [Nice to have] Unit tests
 */

async function enableMocking() {
  // TODO: decide when we want to use msw
  // if (process.env.NODE_ENV !== "development") {
  //   return;
  // }
  const { worker } = await import("./mocks/browser");
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <ChakraUIProvider>
        <RouterProvider router={createRouter().router} />
      </ChakraUIProvider>
    </React.StrictMode>
  );
});
