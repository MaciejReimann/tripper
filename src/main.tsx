import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ChakraUIProvider } from "./libs/chakra-ui/chakra-ui-provider";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraUIProvider>
      <App />
    </ChakraUIProvider>
  </React.StrictMode>
);
