import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import banner2 from '../assets/images/Banner/2.jpg'
import AllToy from './allToy/AllToy';

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);



    useEffect(() => {
        fetch('https://toy-server-site.vercel.app/alltoys')
            .then(res => res.json())
            .then(data => setAllToys(data))



    }, [])
    return (
        <div>

            <div id="slide1" className="carousel-item relative w-full ">
                <img src={banner2} className="w-full h-[300px]" />


            </div>
            <div className="  flex justify-center text-center my-28  " data-aos="fade-right">
                <div  className='text-black  font-semibold space-y-3'>
                    <h2 className='text-3xl font-semibold'><span className='text-orange-600'>Affordable Price </span> <br /> for buying car  for  your babies</h2>
                    <p className='my-3'>"Discover the joy of endless adventures with  our collection of car toys, igniting your imagination <br /> and fueling your desire to experience the real thrill of owning a magnificent car!"</p>

                   

                </div>
            </div>




            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-24 gap-6 ml-24'>
                {
                    allToys.map(toys => <AllToy
                        key={toys._id}
                        toys={toys}

                    />)

                }
            </div>

        </div>
    );
};

export default AllToys;