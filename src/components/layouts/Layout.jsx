import React from 'react'

export default function Layout({children}) {
  return (
    <div className='m-auto flex flex-col justify-center items-center align-middle w-screen h-screen bg-light-40'>
        {children}
    </div>
  )
}
