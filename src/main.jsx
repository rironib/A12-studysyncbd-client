import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from "./routes/Routes.jsx";
import {ChakraProvider} from "@chakra-ui/react";
import {HelmetProvider} from "react-helmet-async";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import AuthProvider from "./providers/AuthProvider.jsx";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
          <QueryClientProvider client={queryClient}>
              <HelmetProvider>
                  <ChakraProvider>
                    <RouterProvider router={router} />
                  </ChakraProvider>
              </HelmetProvider>
          </QueryClientProvider>
      </AuthProvider>
  </React.StrictMode>,
)
