import {useState} from 'react'
import { Select } from "flowbite-react";
import { FileInput, Label } from "flowbite-react";
import { useDropzone } from 'react-dropzone';
import clsx from 'clsx'; // Ensure clsx is imported
import { Button } from "flowbite-react";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";


//components
import CustomModal from '../../components/modal/Modal';

export default function Budget() {
    const [openCreateBudgetModal, setCreateBudgetModal] = useState(false);
    const { getInputProps, isDragAccept, isDragReject, getRootProps, open } = useDropzone();

    const now = new Date();
    const months = Array.from({ length: 12 }, (_, i) => 
        new Date(0, i).toLocaleString('en', { month: 'long' })
    );
    const [currentMonthIndex, setCurrentMonthIndex] = useState(now.getMonth());
    const currentYear = now.getFullYear();
    
    const handlePrevMonth = () => {
        setCurrentMonthIndex(prevIndex => (prevIndex - 1 + 12) % 12);
    };
    const handleNextMonth = () => {
        setCurrentMonthIndex(prevIndex => (prevIndex + 1 + 12) % 12);
    };


  return (
    <div className='flex flex-col'>
        <div className='flex flex-row justify-between items-center w-full bg-violet-80 h-64 p-10'>
            <MdArrowBackIos size={"2rem"} onClick={handlePrevMonth} className='' />
            <span className='text-3xl'>
                {months[currentMonthIndex]}
            </span>
            <MdArrowForwardIos size={"2rem"} onClick={handleNextMonth} className='' />
            
        </div>


        <div className='flex justify-center items-center -translate-y-5 bg-light-100 rounded-t-3xl h-[300px]'>
                <span>
                    You don't have a budget
                </span>


        </div>


        <button onClick={() => setCreateBudgetModal(true)} className='bg-violet-40 hover:text-light-80 hover:bg-violet-80 text-violet-100 p-2 m-auto my-10   rounded-xl w-96'>
                Create a budget
        </button>

        <CustomModal 
        openModal={openCreateBudgetModal} setOpenModal={setCreateBudgetModal} 
        content={
            <div
            className='w-full h-[500px] relative mb-6'
           >
                <span className='text-2xl font-normal text-center w-full absolute'>Create Budget</span>
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
        
        
                   </div>
        
                   <button type='submit' color="dark" size="md" className='w-max h-max mx-auto'>Continue</button>
               </div>
        
               
           </div>
        }
        />
    </div>
  )
}
