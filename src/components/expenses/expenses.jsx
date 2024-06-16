import {React, useState} from 'react'
import { Select } from "flowbite-react";
import { Button } from "flowbite-react";
import { ToggleSwitch } from "flowbite-react";
import { FileInput, Label } from "flowbite-react";
import { useDropzone } from 'react-dropzone';
import clsx from 'clsx'; // Ensure clsx is imported

//components
export default function Expenses() {
    const [switch1, setSwitch1] = useState(false);
    const { getInputProps, isDragAccept, isDragReject, getRootProps, open } = useDropzone();

    const getBorderColor = () => {
        if (isDragAccept) return 'accept';
        if (isDragReject) return 'reject';
        return 'default';
      };

  return (
    <div
    className='w-full h-[600px] relative mb-6'
   >

       <div className='absolute top-48 left-3 text-5xl'>
       ₱
           <input placeholder='00.0' className='w-36 bg-transparent outline-none'/>
           
       </div>


       <div className='flex flex-col gap-2 absolute bottom-0 h-max w-full rounded-t-2xl bg-light-60 p-4'>
           
           <div className='flex flex-col gap-2'>
               
               <Select id="category" required>
                   <option>Shopping</option>
                   <option>Bills</option>
               </Select>

               <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-12" placeholder='Description' />
               
               <div>
                    <div className="mb-2 block">
                            <Label htmlFor="file-upload" value="Add attachment" />
                    </div>
                    <div
                        {...getRootProps({
                            className: clsx('dropzone-container', `dropzone-border-${getBorderColor()}`),
                        })}
                        onClick={open} >
                        <input {...getInputProps()} />
                        <p className='text-black'>Drag 'n' drop your images here, or click to select them.</p>
                        </div>
                 </div>

               <Select id="wallet" required>
                   <option>Paypal</option>
                   <option>Gcash</option>
                   <option>Cash</option>
               </Select>

           </div>

           <Button type='submit' color="dark" size="md" className='w-max h-max mx-auto'>Continue</Button>

       </div>

       
   </div>
    )
}
