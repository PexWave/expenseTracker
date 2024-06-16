import React from 'react'

export default function TransactionHeader({type, category}) {
  return (
    <span className='flex flex-col gap-2'>
    <span className='text-light-20'>
        {type}
    </span>
    <span className='font-bold text-lg'>
        {category}
    </span>
</span>
  )
}
