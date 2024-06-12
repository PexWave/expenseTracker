import React, { useState } from 'react'
import { FaCamera } from "react-icons/fa";
import {
  Outlet, 
} from "react-router-dom";
import { Label, Select } from "flowbite-react";

//components
import { Dropdown } from "flowbite-react";
import Layout from '../../components/layouts/Layout';
import AccountDetail from '../../components/button/AccountDetail';
import ExpensesChart from '../../components/chart/ExpensesChart';
import { Button } from "flowbite-react";
import Card from '../../components/card/Card';


//css
import './home.css';

export default function Home() {

  return (

    <>
      
      {/* MONTH SELECTION */}
      <div className='flex flex-col items-center gap-2 my-2'>
      <div>
      <div className="max-w-md">
        <div className="mb-2 block text-3xl">
          <Label htmlFor="countries" value="Select Month" />
        </div>
        <Select id="month" required>
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </Select>
    </div>
        </div>

        <span className='text-3xl'>
          Account Balance
        </span>

        <span className='text-3xl'>
        ₱00.0
        </span>

      </div>

      {/* ACCOUNT DETAILS */}
        <div className='flex flex-row gap-6 justify-center'>
            <AccountDetail type={"Income"} color={'bg-green-80'} icon={<FaCamera className='text-2xl' />} amount={"5000"} />
            <AccountDetail type={"Expenses"} color={'bg-red-80'} icon={<FaCamera className='text-2xl' />} amount={"5000"} />
        </div>
    
    
      {/* CHART */}
      <div className='m-auto w-full h-full md:w-1/2 my-10'>
        <ExpensesChart/>
      </div>

      {/* WEEKLY, MONTHLY, YEARLY */}
      <div className='m-auto w-min h-min flex flex-row gap-6'>
          <span className='rounded-2xl bg-yellow-60 p-3 cursor-pointer'>
             Weekly
          </span>
          <span className='rounded-2xl bg-yellow-60 p-3 cursor-pointer'>
             Monthly
          </span>
          <span className='rounded-2xl bg-yellow-60 p-3 cursor-pointer'>
             Yearly
          </span>
      </div>


      {/* RECENT TRANSACTIONS */}
          <div className='flex flex-row justify-around'>
              <span>
                Recent Transaction
              </span>

              <button>
                 See All
              </button>
          </div>

          {/* CARD */}
          <div className='w-max m-auto'>
            <Card />
          </div>

    </>
  )
}
