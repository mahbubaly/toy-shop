import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Buses = ({ bus }) => {
    const { name, price, description, image, brand } = bus;
    return (
        <>

            <div className="card lg:w-96 w-80 bg-base-100 shadow-xl p-5 hover:shadow-2xl " data-aos="fade-left">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {brand}

                    </h2>
                    <p><span className='text-xl font-bold'>{name}: </span> {description}</p>
                    <div className=" btn btn-outline my-3 bg-[#1C3F3A] text-white hover:bg-[#1C3F3A] text-2xl font-semibold">Price: $ {price}</div>
                    <div className="btn btn-outline   text-2xl font-semibold"> View more</div>
                </div>
            </div>

        </>
    );
};

export default Buses;