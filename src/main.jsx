import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
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
import Transactions, { TransactionLayout } from './pages/transaction/Transactions';
import DetailTransaction from './pages/transaction/detailtransactions/DetailTransaction';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<HomeLayout/>}>
      <Route index element={<Home/>} />

      <Route path='transaction' element={<TransactionLayout/>}>
        <Route index element={<Transactions/>} />
        <Route path='detailtransaction' element={<DetailTransaction/>} />

      </Route>

    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  </React.StrictMode>,
)
