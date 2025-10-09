import React, { Children, Component } from 'react';
// import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import Errorpages from '../Pages/Errorpages/Errorpages';
import Home from '../Home/Home';
import Allapps from '../AllApps/Allapps';
import Installation from '../Installation/Installation';
import { createBrowserRouter } from 'react-router-dom';

 export const router = createBrowserRouter([
 
   {
    path: "/",
    Component: Root,
    errorElement: <Errorpages />,
     children: [
        {
            index: true,
            path: '/',
            loader : () => fetch('/Trandingapp.json'),
            Component: Home,
        },
        {   
         path:'/Allapps',
         loader: () => fetch('/Allapps.json'),
      
         Component: Allapps,
        },
        {
         path: '/Installation',
         Component: Installation,
        }
     ]
  }
]);