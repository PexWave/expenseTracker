import React, {useState, useEffect} from 'react'
import {
  Link,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { BiTransferAlt } from "react-icons/bi";
import { IoIosAddCircle } from "react-icons/io";
import { IoMdPie } from "react-icons/io";
import { FaUser } from "react-icons/fa";

//components
import Notification from '../notification/Notification';
import ProfileImg from '../displaypicture/ProfileImg';
import CustomModal from '../modal/Modal';
import Expenses from '../expenses/expenses';
import expenseModalTheme from '../../constants/theme/expenseModalTheme';
import Income from '../income/income';
import incomeModalTheme from '../../constants/theme/incomeModalTheme';




function TabButton({ id, label, icon, content, onClick, isActive }) {
  const buttonClasses = `
    ${isActive ? 'bg-violet-80 text-light-100' : ''}
    px-4 py-2 rounded-md
    text-gray-700 hover:text-gray-900 font-medium transition duration-300 ease-in-out
  `;

  return (
    <button
      id={id}
      className={buttonClasses}
      onClick={onClick}
      
    >
      {icon}
      {label}
      {content}
      
    </button>
  );
}


export default function Navbar() {
  const navigate = useNavigate();

  const [activeTabId, setActiveTabId] = useState(null); // Initially track active tab by ID
  
  const [openExpenseModal, setExpenseModal] = useState(false);
  const [openIncomeModal, setIncomeModal] = useState(false);

  const [isShown, setIsShown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isShown) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => setIsVisible(false), 300); // Match this duration with your transition duration
      return () => clearTimeout(timeout);
    }
  }, [isShown]);


  const handleTabClick = (id, path) => {

    if(id !== 'tab3'){
      setActiveTabId(id);
      navigate(path);
    }
    else{
      setIsShown(!isShown);
    }
   

    };

  // Define your tab data with IDs and labels
  const tabs = [
    { id: 'tab1', label: 'Home', path: '/', icon: <IoHomeSharp className='m-auto' size={'2rem'}  />  },
    { id: 'tab2', label: 'Transaction', path: 'transaction', icon: <BiTransferAlt className='m-auto' size={'2rem'} /> },
    { id: 'tab3', label: '', icon: <IoIosAddCircle className='m-auto' size={'4rem'} />},
    { id: 'tab4', label: 'Budget', path: 'budget', icon: <IoMdPie className='m-auto' size={'2rem'} />  },
    { id: 'tab5', label: 'Profile', path: 'profile', icon: <FaUser className='m-auto' size={'2rem'} />
  },

  ];

  return (
    <>    
    
    <nav className='flex flex-row justify-around items-center'>
        <ProfileImg/>

      {tabs.map((tab) => (
        <TabButton
          key={tab.id}
          id={tab.id}
          label={tab.label}
          icon={tab.icon}
          path={tab.path}
          content={tab.id === "tab3" ? 
          <div
          className={`flex-row gap-2 p-5 left-[46%] bg-transparent transition-all duration-300 ease-in-out delay-150 ${
            isShown ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-5'
          } ${isVisible ? 'flex absolute' : 'hidden'}`}
        >
            <button onClick={() => setExpenseModal(true)} className=' bg-green-80 p-3 text-xl rounded-2xl hover:text-light-60'>
              Expenses
            </button>
            <button onClick={() => setIncomeModal(true)} className='bg-red-80 p-3 text-xl rounded-2xl hover:text-light-60'>
              Income
            </button>

          </div> : ""}
          onClick={() => handleTabClick(tab.id, tab.path)}
          isActive={activeTabId === tab.id}
        />
      ))}
        <Notification/>
    </nav>
    
    
    <CustomModal
    openModal={openExpenseModal}
    setOpenModal={setExpenseModal}
    theme={expenseModalTheme}
    content={
      <div className='text-center text-2xl'>
      <span className=''>Expenses</span>
      <Expenses/>
      </div>
    }
    />

    <CustomModal
      openModal={openIncomeModal}
      setOpenModal={setIncomeModal}
      theme={incomeModalTheme}

      content={
        <div className='text-center text-2xl'>
        <span className=''>Income</span>
        <Income/>
        </div>
      }
      />

    </>


)
}
