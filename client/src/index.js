import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./reset.css"
import { ChakraProvider } from '@chakra-ui/react'

import { QueryClient, QueryClientProvider } from 'react-query'
import  {AuthContextProvider}  from './context/AuthContext';
import {BasketContextProvider} from "./context/BasketContext"
const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BasketContextProvider>
   <AuthContextProvider>
    <ChakraProvider>
    <QueryClientProvider client={queryClient}>
     
    <App />
    
    </QueryClientProvider>
    </ChakraProvider>
    </AuthContextProvider>
    </BasketContextProvider>
  </React.StrictMode>
);

