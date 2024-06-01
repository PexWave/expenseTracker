import React from 'react'

export default function AccountDetail({icon, type, amount, color}) {
  return (
    <div className='flex flex-col gap-2 p-4 rounded-3xl'>

    <div className={'flex flex-row justify-around items-center gap-2 p-4 rounded-2xl w-52 ' + color}>
        <div>
            <div className='flex flex-row'>
            {icon}
            </div>
        </div>

        <div className='flex flex-col'>
            <span className='text-2xl'>
               {type}
            </span>
            <span className='text-2xl'>
            ₱{amount}
            </span>
        </div>

    </div>
  </div>
)
}
