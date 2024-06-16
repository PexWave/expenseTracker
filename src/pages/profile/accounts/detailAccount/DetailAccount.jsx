import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";

//components
import TransactionHistory from '../../../../components/transactionHistory/transactionHistory';

export default function DetailAccount() {
  return (
    <div className='relative p-5'>
        
        <div className='flex flex-col gap-7 h-80 w-full rounded-b-lg  bg-red-80'>
            <div className='flex flex-row justify-between p-10'>
                <FaArrowLeftLong size={"2rem"} className='hover:cursor-pointer text-light-100 hover:text-black'/>
                <span className='font-semibold text-2xl text-light-100'>
                  Detail Transaction
                </span>
                <MdModeEditOutline size={"2rem"} className='hover:cursor-pointer text-light-100 hover:text-black' />
            </div>

            <div className='flex flex-col items-center gap-1'>
                <span className='font-medium text-lg  text-light-100'>
                    Icon
                </span>
                <span className='font-light text-lg  text-light-100'>
                    Paypal
                </span>
                <span className='text-7xl font-bold  text-light-100'>
                  $120
                </span>

            </div>
        </div>

        <div className='w-[97%] m-auto rounded-t-lg -translate-y-4 bg-light-80 p-5'>
            <TransactionHistory/>
        <div>

        

            </div>
        </div>
    </div>
  )
}
