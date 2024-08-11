import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import App from './App.jsx';
import './index.css';
import UserInfo from './pages/UserInfo.jsx';
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />},
    {
      path:"/UserInfo",
      element:<UserInfo/>
    }
  ])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);
