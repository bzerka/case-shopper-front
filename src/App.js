import React from "react";
import Router from "./routes/Router";
import { ChakraProvider } from "@chakra-ui/react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  );
}

export default App;
