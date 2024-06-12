import React from 'react'

export default function ProfileImg() {
  return (
    <img width={'200px'} height={'200px'} className='bg-contain hidden sm:block' 
    style={{
        borderRadius: '50%', // Start with a circle base
        width: '100px', // Adjust width as needed
        height: '100px', // Adjust height as needed (taller for oval)
        overflow: 'hidden', // Clip overflowing parts
        objectFit: 'cover'
      }}
    src="/images/meandKing.jpg" alt="" />
)
}
