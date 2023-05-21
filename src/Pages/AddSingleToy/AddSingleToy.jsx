import React, { useEffect, useState } from 'react';
import banner2 from '../../assets/images/Banner/3.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SingleData from './SingleData';
AOS.init();

const AddSingleToy = () => {

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


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-24 gap-6 md:ml-6 ml-11'>
                {
                    allToys.map(toys => <SingleData

                        key={toys._id}
                        toys={toys}
                    />

                    )

                }
            </div>

        </>
    );
};

export default AddSingleToy;