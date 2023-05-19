import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon, Bars4Icon } from '@heroicons/react/24/solid';
import logo from '../../assets/images/logo/car_logo.png'
import '../../Pages/styles.css';




const Navbar = () => {
    const navItem = <>
        <Link to='/'><li className='decoration-none'>Home</li></Link>
        <Link to='/toys'><li className='decoration-none'>All toys</li></Link>
        <Link to='/blogs'><li className='decoration-none'>Blog</li></Link>
        <Link to='/about'><li className='decoration-none'>About us</li></Link>
        <Link to='/help'><li className='decoration-none'>help</li></Link>
        <Link to='/logIn'><li className='decoration-none'>Log in</li></Link>
        <Link to='/signUp'><li className='decoration-none'>Sign up</li></Link>




    </>
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="navbar bg-[#1C3F3A]">

                <div className="navbar-start">
                    {/* Mobile */}
                    <div onClick={() => setOpen(!open)} className='lg:hidden navBar'>
                        <label className="btn btn-circle bg-gre swap swap-rotate">

                            {
                                open === true ? <XMarkIcon className="h-8 w-8 text-primary " /> : <Bars4Icon className="h-8 w-8 text-primary " />
                            }


                        </label>

                        <div className={`${open ? 'bg-gray-900   text-primary p-6 w-44 pl-3 ' : '-top-96 -left-9'} absolute flex flex-col duration-1000 gap-3 text-white `}>


                            {navItem}

                        </div>
                    </div>

                    <div className='lg:block hidden '>
                        <Link to='/'> <img className='w-[80px] h-[100px]' src={logo} alt="" /> </Link>
                    </div>


                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-5 text-xl text-white font-semibold">
                        {navItem}
                    </ul>


                </div>
                <div className='lg:hidden block'>
                    <Link to='/'> <img className='w-[80px] h-[100px]' src={logo} alt="" /> </Link>
                </div>
                <div className="navbar-end  pr-3">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img className='w-[80px] h-[100px]' src={logo} alt="" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile

                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Navbar;