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
                    className="text-red absolute  top-3 right-3 "
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
                className=" z-20 rounded-tr-3xl p-2 flex flex-col justify-between fixed top-0 left-0 bottom-0 w-[80%] md:w-[20%] lg:w-[10%] bg-background"
            >
                <ul className="flex flex-col gap-5 justify-center mt-10 p-2">
                    <div>
                        <span className="text-red text-xl mb-2">
                            My movies app
                        </span>
                    </div>
                    <li className="text-textPrimary flex justify-between items-center hover:text-textWhite  ">
                        <Link to="/dashboard">Dashboard</Link>
                        <FaFlipboard className="text-red" />
                    </li>
                    <li className="text-textPrimary flex justify-between items-center hover:text-textWhite  ">
                        <Link to="/favorites">Favorites</Link>
                        <FaStar className="text-red" />
                    </li>
                    <li className="text-textPrimary flex justify-between items-center hover:text-textWhite  ">
                        <Link to="/profile">Profile</Link>
                        <FaUserAlt className="text-red" />
                    </li>
                </ul>
                <div>
                    <button className=" flex items-center justify-center gap-2 w-full  text-textWhite bg-gradient-to-r from-from to-red  p-2 rounded-md shadow-md brightness-75">
                        <span>Logout</span>
                        <FaPowerOff />
                    </button>
                </div>
            </motion.nav>

            <div className=" w-full ">{children}</div>
        </div>
    );
};
