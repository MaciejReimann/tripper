import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { ChakraUIProvider } from "./libs/chakra-ui/chakra-ui.provider";
import { QueryClientProvider } from "./libs/react-query/query-client.provider";
import { router } from "./router";

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
        <QueryClientProvider>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ChakraUIProvider>
    </React.StrictMode>
  );
});
