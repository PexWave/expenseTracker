import React, {useState} from 'react'
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

function TabButton({ id, label, icon, onClick, path, isActive }) {
  const buttonClasses = `
    ${isActive ? 'bg-violet-80' : ''}
    px-4 py-2 rounded-md
    text-gray-700 hover:text-gray-900 font-medium transition duration-300 ease-in-out
  `;

  return (
    <Link
      id={id}
      className={buttonClasses}
      to={path}
      onClick={onClick}
    >
        {icon}
      {label}
      
    </Link>
  );
}


export default function Navbar() {
  const navigate = useNavigate();

  const [activeTabId, setActiveTabId] = useState(null); // Initially track active tab by ID

  const handleTabClick = (id,path) => {
    setActiveTabId(id);
    navigate(path);

    };

  // Define your tab data with IDs and labels
  const tabs = [
    { id: 'tab1', label: 'Home', path: '/', icon: <IoHomeSharp className='m-auto' size={'2rem'}  />  },
    { id: 'tab2', label: 'Transaction', path: 'transaction', icon: <BiTransferAlt className='m-auto' size={'2rem'} /> },
    { id: 'tab3', label: '', path: '', icon: <IoIosAddCircle className='m-auto' size={'4rem'} />},
    { id: 'tab4', label: 'Budget', path: 'budget', icon: <IoMdPie className='m-auto' size={'2rem'} />  },
    { id: 'tab5', label: 'Profile', path: 'profile', icon: <FaUser className='m-auto' size={'2rem'} />
  },

  ];

  return (
    <nav className='flex flex-row justify-around items-center'>
        <ProfileImg/>

      {tabs.map((tab) => (
        <TabButton
          key={tab.id}
          id={tab.id}
          label={tab.label}
          icon={tab.icon}
          path={tab.path}
          onClick={() => handleTabClick(tab.id, tab.path)}
          isActive={activeTabId === tab.id}
        />
      ))}
        <Notification/>
        
    </nav>

)
}
