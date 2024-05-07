import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


//components
import Home from './pages/home/Home';
import Onboarding from './pages/onboarding/Onboarding';
import Signin from './pages/authentication/signin/Signin';
import Signup from './pages/authentication/signup/Signup';
import ErrorPage from './error-page';

//css
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Onboarding />,
    errorElement: <ErrorPage/>,
    children: [
        
    ]
  },
  {
    path: "/auth/login",
    element: <Signin />,
    errorElement: <ErrorPage/>,
    children: [

    ]
  },
  {
    path: "/auth/signup",
    element: <Signup />,
    errorElement: <ErrorPage/>,
    children: [

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
