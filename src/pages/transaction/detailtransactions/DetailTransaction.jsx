import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";

//components
import TransactionHeader from './components/TransactionHeader';
import Divider from '../../../components/divider/Divider';

export default function DetailTransaction() {
  return (
    <div className='relative p-5'>
        
        <div className='flex flex-col gap-7 h-80 w-full rounded-b-lg  bg-red-80'>
            <div className='flex flex-row justify-between p-10'>
                <FaArrowLeftLong size={"2rem"} className='hover:cursor-pointer text-light-100 hover:text-black'/>
                <span className='font-semibold text-2xl text-light-100'>
                  Detail Transaction
                </span>
                <FaRegTrashAlt size={"2rem"} className='hover:cursor-pointer text-light-100 hover:text-black' />
            </div>

            <div className='flex flex-col items-center gap-1'>
                <span className='text-7xl font-bold  text-light-100'>
                  $120
                </span>
                <span className='font-medium text-lg  text-light-100'>
                  Buy some grocery
                </span>
                <span className='font-light text-lg  text-light-100'>
                  Saturday 4 June 2021 16:20
                </span>
            </div>
        </div>

        <div className='w-[97%] m-auto rounded-t-lg -translate-y-4 bg-light-80'>
              <div className='flex flex-row justify-between p-4'>
                  <TransactionHeader type={"Type"} category={"Expense"} />
                  <TransactionHeader type={"Category"} category={"Shopping"} />
                  <TransactionHeader type={"Wallet"} category={"Wallet"} />
              </div>

              <Divider/>

              <div className='flex flex-col gap-2'>
                    <span className='text-light-20 font-semibold text-lg'>
                        Description
                    </span>
                    <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque corrupti harum impedit mollitia quasi. Molestias reiciendis ullam fugiat dolores ipsa inventore cumque, obcaecati, ipsum consectetur eligendi velit facilis explicabo. Aliquam.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque corrupti harum impedit mollitia quasi. Molestias reiciendis ullam fugiat dolores ipsa inventore cumque, obcaecati, ipsum consectetur eligendi velit facilis explicabo. Aliquam.
                    </p>
                    <span className='text-light-20 font-semibold text-lg'>
                        Attachment
                    </span>  

                    <button className='bg-violet-40 hover:text-light-80 hover:bg-violet-80 text-violet-100 p-2 py-2 rounded-xl w-96 m-auto'>
                        <p className='text-2xl'>Edit</p>
                    </button>
      
              </div>
            <div>

            </div>
        </div>
    </div>
  )
}
