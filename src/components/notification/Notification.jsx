import React, {useState, useRef, useEffect} from 'react'
import { IoNotifications } from "react-icons/io5";

export default function Notification() {

    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const toggleDropdown = () => setIsNotificationOpen(!isNotificationOpen);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
  
    const handleOutsideClick = (event) => {
        if (
          menuRef.current &&
          !menuRef.current.contains(event.target) &&
          event.target !== buttonRef.current
        ) {
            setIsNotificationOpen(false);
        }
      };
    
      useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }, []);

  return (
    <div className='relative'>
        <button ref={buttonRef} onClick={toggleDropdown}>
            <IoNotifications className='text-3xl' />
        </button> 

    {isNotificationOpen &&
    
    <div ref={menuRef}
    className='absolute -left-96 bg-light-20 w-[500px] h-[600px] rounded-xl p-4'>
        <div className='flex flex-col gap-2'>
            <div className='flex flex-row'>
                <div className='w-64 truncate'>Shopping budget has exceeded the limit</div>
                <div className='w-min'>19:30</div>

            </div>
        </div>
    </div>
}
    </div>
  )
}
