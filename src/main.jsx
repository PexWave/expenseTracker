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
import BudgetLayout from './components/layouts/budgetLayout/BudgetLayout';
import Budget from './pages/budget/Budget';
import BudgetDetail from './pages/budget/budgetDetail/BudgetDetail';
import ProfileLayout from './components/layouts/profileLayout/ProfileLayout';
import Profile from './pages/profile/Profile';
import Accounts from './pages/profile/accounts/Accounts';
import DetailAccount from './pages/profile/accounts/detailAccount/DetailAccount';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<HomeLayout/>}>
      <Route index element={<Home/>} />

      {/* ROUTES FOR TRANSACTION */}
      <Route path='transaction' element={<TransactionLayout/>}>
        <Route index element={<Transactions/>} />
        <Route path='detailtransaction' element={<DetailTransaction/>} />
      </Route>

      {/* ROUTES FOR BUDGET */}
      <Route path='budget' element={<BudgetLayout/>}>
        <Route index element={<Budget/>} />
        <Route path='budgetdetail' element={<BudgetDetail/>} />
      </Route>

      {/* ROUTES FOR PROFILE */}
      <Route path='profile' element={<ProfileLayout/>}>
        <Route index element={<Profile/>} />
        <Route path='accounts' element={<Accounts/>} />
        <Route path='detailaccount' element={<DetailAccount/>} />

      </Route>

    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  </React.StrictMode>,
)
