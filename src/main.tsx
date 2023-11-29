import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ChakraUIProvider } from "./libs/chakra-ui/chakra-ui-provider";

import App from "./App.tsx";

async function enableMocking() {
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
        <App />
      </ChakraUIProvider>
    </React.StrictMode>
  );
});
