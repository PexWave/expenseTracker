import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


//components
import HomeLayout from './components/layouts/homelayout/HomeLayout';
import Home from './pages/home/Home';
import Onboarding from './pages/onboarding/Onboarding';
import AddAccount from './pages/onboarding/addaccount/AddAccount';

import Signin from './pages/authentication/signin/Signin';
import Signup from './pages/authentication/signup/Signup';
import ErrorPage from './error-page';

//css
import './index.css';
import Transactions from './pages/transaction/Transactions';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "transaction",
        // Single route in lazy file
        lazy: () => import("./pages/transaction/Transactions"),
        element: <Transactions/>
      },  
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
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  </React.StrictMode>,
)
