import React from 'react';
import { FaPen } from "react-icons/fa6";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { Link } from 'react-router-dom';
//components
import ProfileImg from '../../components/displaypicture/ProfileImg';

export default function Profile() {
  return (
    <div className='w-[700px] h-screen m-auto p-10'>
        <div className='grid grid-cols-3'>
            <div className='col-span-2 gap-8 flex flex-row w-full'>
                <ProfileImg/>
                <div className='flex flex-col gap-2'>
                    <span className='text-light-20'>
                        Username
                    </span>
                    <span className='text-3xl'>
                        Sarhan Asakil
                    </span>
                </div>

            </div>
            <div className='flex justify-end items-center'>
                 <FaPen size={"2rem"} />
            </div>
        </div>

        <div className='flex flex-col gap-1 rounded-3xl'>
            <Link to="/profile/accounts" className='flex flex-row items-center gap-2 h-36'>
                <MdOutlineAccountBalanceWallet className='bg-violet-20 w-28 h-24 text-violet-100 rounded-xl' size={"3rem"} />
                <p className='text-3xl'>Account</p>
            </Link>
            <span className='flex flex-row items-center gap-2 h-36'>
                <IoSettings className='bg-violet-20 w-28 h-24 text-violet-100 rounded-xl' size={"3rem"} />
                <p className='text-3xl'>Settings</p>
            </span>
            <span className='flex flex-row items-center gap-2 h-36'>
                <IoIosLogOut className='bg-red-20 w-28 h-24 text-red-80 rounded-xl' size={"3rem"} />
                <p className='text-3xl'>Logout</p>
            </span>
        </div>
    </div>
  )
}
