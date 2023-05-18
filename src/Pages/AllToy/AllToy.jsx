import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const AllToy = ({toys}) => {
    console.log(toys);
    const {image , carName} = toys;
    return (
        <>
            <div data-aos="fade-left" className="card w-96 h-[500px] hover:shadow-2xl hover:duration-700 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{carName}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AllToy;