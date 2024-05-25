import React from 'react'
import Layout from '../../../components/layouts/Layout'
import { Label, Select } from "flowbite-react";
import { Button } from "flowbite-react";

export default function AddAccount() {
  return (
    <Layout>

        <div
         className='w-96 h-[600px] bg-violet-80 relative'
        >
            <div className='absolute top-48 left-3 text-5xl'>
            ₱
                <input placeholder='00.0' className='w-36 bg-transparent outline-none'/>
                
            </div>


            <div className='flex flex-col gap-2 absolute bottom-0 h-52 w-full rounded-t-2xl bg-light-60 p-4'>
                
                <div className='flex flex-col gap-2'>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-12" placeholder='Name' />
                    
                    <Select id="account_type" required>
                        <option>Savings</option>
      
                    </Select>

                </div>

                <Button type='submit' color="dark" size="md" className='w-56 m-auto'>Continue</Button>

            </div>

            
        </div>

    </Layout>
  )
}
