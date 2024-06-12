import React, {useState} from 'react'
import {
    Outlet,
  } from "react-router-dom";
  import { RiMenu5Line } from "react-icons/ri";
  import { Label, Select } from "flowbite-react";
  import { Tabs } from "flowbite-react";
  import { FaFilter } from "react-icons/fa";


//components
import Navbar from '../../components/navbar/Navbar';
import SelectMonth from '../../components/select/SelectMonth';
import SelectCategory from '../../components/select/selectCategory';
import CustomModal from '../../components/modal/Modal';
import TransactionHistory from '../../components/transactionHistory/transactionHistory';


export function TransactionLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default function Transactions() {
  const [openFilterModal, setFilterModal] = useState(false);
  const [openFinancialReportModal, setFinancialReportModal] = useState(false);


  const customTheme = {
    base: "flex flex-col gap-2",
    tablist: {
      base: "flex text-center",
      styles: {
        default: "flex-wrap border-b border-gray-200 dark:border-gray-700",
        underline: "-mb-px flex-wrap border-b border-gray-200 dark:border-gray-700",
        pills: "flex-wrap space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400",
        fullWidth: "grid w-full grid-flow-col divide-x divide-gray-200 rounded-none text-sm font-medium shadow dark:divide-gray-700 dark:text-gray-400"
      },
      tabitem: {
        base: "flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none focus:ring-4 focus:ring-cyan-300 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
        styles: {
          default: {
            base: "rounded-t-lg",
            active: {
              on: "bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
              off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300"
            }
          },
          underline: {
            base: "rounded-t-lg",
            active: {
              on: "active rounded-t-lg border-b-2 border-cyan-600 text-cyan-600 dark:border-cyan-500 dark:text-cyan-500",
              off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
            }
          },
          pills: {
            base: "",
            active: {
              on: "rounded-lg bg-cyan-600 text-white",
              off: "rounded-lg hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
            }
          },
          fullWidth: {
            base: "ml-0 flex w-full rounded-lg first:ml-0",
            active: {
              on: "active rounded-lg bg-violet-80 p-4 text-gray-900 dark:bg-gray-700 dark:text-white",
              off: "rounded-lg bg-white hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
            }
          }
        },
        icon: "mr-2 h-5 w-5"
      }
    },
    tabitemcontainer: {
      base: "",
      styles: {
        default: "",
        underline: "",
        pills: "",
        fullWidth: ""
      }
    },
    tabpanel: "py-3"
  };

  return (
    <div className='flex flex-col gap-10 m-2'>
      <div className='flex flex-row justify-between gap-2 my-2 mx-8 md:mx-80'>
        <SelectMonth/>
        <RiMenu5Line size={'2rem'} onClick={() => setFilterModal(true)} className='hover:cursor-pointer	' />

        <CustomModal
        size={"2xl"}
        content={
          <div className='flex flex-col w-full p-2 gap-4'>
              <div className='flex flex-row justify-between'>
                  <span className='font-bold text-xl'>Filter Transaction</span>
                  <button className='w-min text-violet-80 hover:bg-violet-80 hover:text-white transition ease-in-out delay-150 bg-light-40 py-2 px-6 rounded-3xl'>Reset</button>
              </div>

              <div className='flex flex-col gap-2'>
                  <span className='font-bold text-xl'>Filter By</span>
                  <div className='flex flex-row gap-3'>
                    <button className='w-min text-violet-80 hover:bg-violet-80 hover:text-white transition ease-in-out delay-150 bg-light-40 py-2 px-6 rounded-3xl'>Income</button>
                    <button className='w-min text-violet-80 hover:bg-violet-80 hover:text-white transition ease-in-out delay-150 bg-light-40 py-2 px-6 rounded-3xl'>Expense</button>
                  </div>
              </div>

              <div className='flex flex-col gap-2'>
                  <span className='font-bold text-xl'>Sort By</span>
                  <div className='flex flex-row gap-3'>
                    <button className='w-min text-violet-80 hover:bg-violet-80 hover:text-white transition ease-in-out delay-150 bg-light-40 py-2 px-6 rounded-3xl'>Highest</button>
                    <button className='w-min text-violet-80 hover:bg-violet-80 hover:text-white transition ease-in-out delay-150 bg-light-40 py-2 px-6 rounded-3xl'>Lowest</button>
                    <button className='w-min text-violet-80 hover:bg-violet-80 hover:text-white transition ease-in-out delay-150 bg-light-40 py-2 px-6 rounded-3xl'>Newest</button>
                    <button className='w-min text-violet-80 hover:bg-violet-80 hover:text-white transition ease-in-out delay-150 bg-light-40 py-2 px-6 rounded-3xl'>Oldest</button>
                  </div>
              </div>

              <div className='flex flex-col gap-2'>
                  <span className='font-bold text-xl  '>Choose Category</span>
                  <div className='flex flex-row gap-3'>
                  <Select id="category" required>
                      <option>Shopping</option>
                      <option>Bills</option>
                  </Select>
                  </div>
              </div>

              <button className='w-full transition ease-in-out delay-150 text-white hover:bg-violet-80 bg-violet-100 py-2 px-6 rounded-3xl'>Apply</button>

          </div>  
        }
        openModal={openFilterModal} setOpenModal={setFilterModal} />
      </div>

      <div className='flex justify-center'>
      <button onClick={() => setFinancialReportModal(true)}  className='bg-violet-40 hover:text-light-80 hover:bg-violet-80 text-violet-100 p-2 rounded-xl w-96'>
            See your financial report
      </button>
      
      <CustomModal
      size={"2xl"}
      content={
        <>
          <div className='flex flex-col justify-center gap-2'>
            <div className='flex flex-row justify-between px-2'>
              <SelectMonth/>

            </div>

            <Tabs aria-label="Default tabs" theme={customTheme} style="fullWidth">
              <Tabs.Item active title="Expenses">
                  <div className='flex flex-row justify-between px-5 gap-10'>
                    <SelectCategory/>
                    <FaFilter />

                  </div>

                  <TransactionHistory/>

              </Tabs.Item>
              
              <Tabs.Item active title="Income">
                  
              </Tabs.Item>
            </Tabs>

          </div>
        </>
      }
      openModal={openFinancialReportModal} setOpenModal={setFinancialReportModal}
      />
      </div>


     {/* transaction history */}

      <TransactionHistory/>
      {/* CARD */}
      

    </div>

  )
}
