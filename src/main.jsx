import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from "./routes/Routes.jsx";
import {ChakraProvider} from "@chakra-ui/react";
import {HelmetProvider} from "react-helmet-async";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <HelmetProvider>
          <ChakraProvider>
            <RouterProvider router={router} />
          </ChakraProvider>
      </HelmetProvider>
  </React.StrictMode>,
)
