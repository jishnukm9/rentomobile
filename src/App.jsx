import React, { createContext, useState } from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Search from './pages/Search';
import SearchResults from './pages/SearchResults';
import Booking from './pages/Booking';
import PageNotFound from './pages/PageNotFound';
import toast, { Toaster } from "react-hot-toast";
import SearchProvider from './context/SearchContext';
import FilterProvider from './context/filterContext';
import CarDetailsPage from './pages/CarDetailsPage';
import DetailsProvider from './context/DetailsContext';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './features/checkout/CheckoutForm';


const stripePromise = loadStripe('your_stripe_public_key');
export default function App() {










  

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
        cacheTime: 10 * 60 * 1000 
      },
    },
  })
  return (

    
    
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <SearchProvider>
        
      <BrowserRouter >
      <Elements stripe={stripePromise}>
    <Routes>
    
        <Route index element={<Navigate replace to="search" />} />
        <Route path="search" element={<Search/>} />
        <Route path="bookingsearchresult" element={
           <DetailsProvider>
        <FilterProvider>
        <SearchResults />
        </FilterProvider>
        </DetailsProvider>
        } />
        <Route path="cardetails" element={
        <DetailsProvider><CarDetailsPage/></DetailsProvider>
        
        
        } />
   
           <Route path="checkout" element={<CheckoutForm />} />
          
        <Route path="booking" element={<Booking />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </Elements>
    </BrowserRouter>
    
    </SearchProvider>
    <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
    
  )
}
