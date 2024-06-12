import React from 'react'

//components
import Card from '../card/Card';

export default function TransactionHistory() {
  return (
    <div className='flex flex-col items-center gap-8'>
    <div className='flex flex-col gap-2'>
      <span>Today</span>
        <div className='w-max m-auto'>
              <Card />
        </div>
    </div>
    <div className='flex flex-col gap-2'>
      <span>Yesterday</span>
        <div className='w-max m-auto'>
              <Card />
        </div>
    </div>
</div>  )
}
