import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Accounts() {
  return (
    <div className='relative p-5'>
        
        <div className='flex flex-col gap-7 h-80 w-full rounded-b-lg  bg-red-80'>
            <div className='flex flex-row justify-between p-10'>
                <FaArrowLeftLong size={"2rem"} className='hover:cursor-pointer text-light-100 hover:text-black'/>
                <span className='font-semibold text-5xl text-light-100'>
                  Account
                </span>
                <div></div>
            </div>

            <div className='flex flex-col items-center gap-1'>
            <span className='text-2xl font-normal  text-light-100'>
                  Account Balance
                </span>
                <span className='text-7xl font-bold  text-light-100'>
                  $120
                </span>

            </div>
        </div>

        <div className='flex flex-col justify-center w-[97%] m-auto rounded-t-lg -translate-y-4 bg-light-80'>
              <div className='flex flex-col items-center justify-evenly gap-2 my-10'>

                    <Link to="/profile/detailaccount" className='flex flex-row justify-evenly items-center gap-60 rounded-xl p-4 hover:bg-violet-80 w-max'>
                        <span className='flex flex-row items-center gap-2 h-36'>
                                <MdOutlineAccountBalanceWallet className='bg-violet-20 w-28 h-24 text-violet-100 rounded-xl' size={"3rem"} />
                                <p className='text-3xl'>Account</p>
                        </span>

                        <span className='text-4xl'>
                            $400
                        </span>
                    </Link >

      
              </div>
              

                <button className='bg-violet-40 hover:text-light-80 hover:bg-violet-80 text-violet-100 p-2 py-2 rounded-xl w-96 m-auto'>
                            <p className='text-2xl'>Add new wallet</p>
                </button>
            <div>

            </div>
        </div>
    </div>
  )
}
