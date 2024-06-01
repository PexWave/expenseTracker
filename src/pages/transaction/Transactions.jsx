import React, {useState} from 'react'
import {
    Outlet,
  } from "react-router-dom";
  import { RiMenu5Line } from "react-icons/ri";
  import { Label, Select } from "flowbite-react";

//components
import Navbar from '../../components/navbar/Navbar';
import SelectMonth from '../../components/select/SelectMonth';
import CustomModal from '../../components/modal/Modal';
export default function Transactions() {
  const [openModal, setOpenModal] = useState(false);


  return (
    <div className='flex flex-row justify-between gap-2 my-2 mx-52'>
      <SelectMonth/>
      <RiMenu5Line size={'2rem'} onClick={() => setOpenModal(true)} className='hover:cursor-pointer	' />


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
      openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  )
}
