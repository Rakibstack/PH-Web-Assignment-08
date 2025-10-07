import React, { Children, Component } from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import Errorpages from '../Pages/Errorpages/Errorpages';
import Home from '../Home/Home';

 export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Errorpages></Errorpages>,
     children: [
        {
            index: true,
            path: '/',
            Component: Home,
        }
     ]
  },
  
]);