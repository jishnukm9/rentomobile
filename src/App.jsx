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




export default function App() {










  

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  })
  return (

    
    
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <SearchProvider>
      <BrowserRouter >
    <Routes>
    
        <Route index element={<Navigate replace to="search" />} />
        <Route path="search" element={<Search/>} />
        <Route path="bookingsearchresult" element={<SearchResults />} />
        
        <Route path="booking" element={<Booking />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
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
