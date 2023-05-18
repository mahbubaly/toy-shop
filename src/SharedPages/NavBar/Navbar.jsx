import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon, Bars4Icon, PhoneArrowUpRightIcon } from '@heroicons/react/24/solid';
import logo from '../../assets/images/logo/car_logo.png'




const Navbar = () => {
    const navItem = <>
        <Link to='/'><li className='decoration-none'>Home</li></Link>
        <Link to='/toys'><li className='decoration-none'>All toys</li></Link>
        <Link to='/blogs'><li className='decoration-none'>Blog</li></Link>
        <Link to='/about'><li className='decoration-none'>About us</li></Link>
        <Link to='/help'><li className='decoration-none'>help</li></Link>




    </>
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="navbar bg-[#1C3F3A]">

                <div className="navbar-start">
                    {/* Mobile */}
                    <div onClick={() => setOpen(!open)} className='lg:hidden'>
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
                <div className="navbar-end gap-3 pr-3">
                    <h2 className='text-white'>Call now</h2>
                    <Link><a className=""><PhoneArrowUpRightIcon className="h-8 w-8 text-white bg-[#1C3F3A] " /> </a> </Link>

                </div>
            </div>
        </>
    );
};

export default Navbar;