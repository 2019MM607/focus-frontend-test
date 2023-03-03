import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaStar,
  FaFlipboard,
  FaUserAlt,
  FaPowerOff,
  FaBars,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const variants = {
    open: { x: '0px' },
    closed: { x: '-100%' },
  };
  const handleOpenCloseNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <div className="">
        <button
          className="text-red-600 absolute  top-3 right-3"
          onClick={handleOpenCloseNav}
        >
          <FaBars />
        </button>
      </div>

      <motion.nav
        transition={{ duration: 0.5, bounce: 0 }}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        className=" p-2 flex flex-col justify-between fixed top-0 left-0 bottom-0 w-[80%] md:w-[20%] bg-[#0F0F0F]"
      >
        <ul className="flex flex-col gap-5 justify-center p-2">
          <li className="text-gray-700 flex justify-between items-center  ">
            <Link to="/dashboard">Dashboard</Link>
            <FaFlipboard className="text-red-700" />
          </li>
          <li className="text-gray-700 flex justify-between items-center  ">
            <Link to="/favorites">Favorites</Link>
            <FaStar className="text-red-700" />
          </li>
          <li className="text-gray-700 flex justify-between items-center  ">
            <Link to="/profile">Profile</Link>
            <FaUserAlt className="text-red-700" />
          </li>
        </ul>
        <div>
          <button className=" flex items-center justify-center gap-2 w-full  text-white bg-gradient-to-r from-red-700 to-red-600 p-2 rounded-md shadow-md backdrop-brightness-90">
            <span>Logout</span>
            <FaPowerOff />
          </button>
        </div>
      </motion.nav>

      <div className=" w-full ">{children}</div>
    </div>
  );
};
