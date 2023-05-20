import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import banner2 from '../assets/images/Banner/2.jpg'
import { MapPinIcon } from '@heroicons/react/24/solid'

import AOS from 'aos';
import 'aos/dist/aos.css';
import AllToy from './AllToy/AllToy';
AOS.init();

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);



    useEffect(() => {
        fetch('https://toy-server-site.vercel.app/alltoys')
            .then(res => res.json())
            .then(data => setAllToys(data))



    }, [])
    return (
        <>





            <div id="slide1" className="carousel-item relative w-full my-9 " data-aos="fade-left" data-aos-duration="2000">
                <img src={banner2} className="w-full h-[300px]  rounded-xl" />


            </div>
            <div className="  flex justify-center text-center my-14  " data-aos="fade-right">
                <div className='text-black  font-semibold space-y-3'>
                    <h2 className='text-3xl font-semibold'><span className='text-orange-600'>Affordable Price </span> <br /> for buying car  for  your babies</h2>
                    <p className='my-3'>"Discover the joy of endless adventures with  our collection of car toys, igniting your imagination <br /> and fueling your desire to experience the real thrill of owning a magnificent car!"</p>



                </div>
            </div>


            <div className=' '>
               


                <div className=" form-control  my-3">
                    <div className="flex justify-center items-center w-full">
                        <input type="text" placeholder="What are you looking for?" className="input bg-white border-3  rounded-s-lg  w-[50%]" />
                        <div className=''>
                            <button className=" p-3  btn-outline rounded-r-lg   ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>


            </div>




            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-24 gap-6 md:ml-6 ml-11'>
                {
                    allToys.map(toys => <AllToy
                        key={toys._id}
                        toys={toys}

                    />)

                }
            </div>

        </>
    );
};

export default AllToys;