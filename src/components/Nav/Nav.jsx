import React, { useState } from 'react';
import logo from '../../../public/Logo.png'
import { NavLink } from 'react-router-dom';
import './Nav.css'
import { RxTextAlignJustify } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const Nav = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='max-w-6xl mx-auto mt-5 flex justify-between items-center px-3 md:px-0'>
            
            <div>
                <img className='w-40' src={logo} alt="" />
            </div>
            <div className={`bg-gray-300 h-full top-0 px-9 pt-4 md:px-0 md:pt-0 md:bg-white flex flex-col md:flex-row gap-2 md:gap-6 absolute md:static duration-500 md:duration-0 z-20 ${toggle ? 'left-0' : '-left-40'}`} id='nav-link'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/donation'}>Donation</NavLink>
                <NavLink to={'/statistics'}>Statistics</NavLink>
            </div>
            <div className='md:hidden' onClick={() => setToggle(!toggle)}>
                {
                    toggle ? <RxCross1 className='text-4xl' /> : <RxTextAlignJustify className='text-4xl' />
                }
            
            
            </div>
        </div>
    );
};

export default Nav;