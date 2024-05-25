import React from 'react'
import { FaShoppingBag } from "react-icons/fa";

export default function Card() {
  return (
    <div className='flex flex-row items-center gap-2'>
        <div className=' rounded-2xl bg-yellow-60 p-6'>
        <FaShoppingBag size={"2rem"} />

        </div>
        <div className='flex flex-col gap-1'>
            <span>
                Shopping
            </span>
            <span className='flex-nowrap'>
                Buy Some Groceries
            </span>
        </div>

        <div className='flex flex-col gap-1'>
            <span>
                -120
            </span>
            <span>
                10:00 AM
            </span>
        </div>
    </div>  
  )
}
