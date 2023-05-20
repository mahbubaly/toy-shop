import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
AOS.init();

const AllToy = ({ toys }) => {
    console.log(toys);
    const { image, carName, price, sellerName, availableQuantities,_id } = toys;
    return (
        <>
            <div data-aos="fade-left" className="card w-96 h-[500px] hover:shadow-2xl hover:duration-700 bg-base-100 shadow-xl p-5">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{carName}</h2>
                    <h2 className='text-xl font-semibold'>Quantity: {availableQuantities}</h2>
                    <h1 className='text-xl font-semibold'> Seller Name: {sellerName}</h1>
                    <div className="card-actions">

                        <h2 className='text-xl'> price: ${price}</h2>
                    </div>
                    <div className='flex gap-3'>
                        <h1 className='font-semibold text-lg'>Review: </h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512">
                            <path fill="#ffd700" d="M288 8l69.3 211.5L567.9 236l-176.6 128.8 53.1 214.7L288 448l-156.5 120.5 53.1-214.7L8.1 236l210.6-16.5L288 8zm0 36.8L222.3 246.2 79.3 244l173.4 125.8-65.7 201.4L288 372.2V44.8zm0 0" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512">
                            <path fill="#ffc107" d="M288 8l69.3 211.5L567.9 236l-176.6 128.8 53.1 214.7L288 448l-156.5 120.5 53.1-214.7L8.1 236l210.6-16.5L288 8zm0 36.8L222.3 246.2 79.3 244l173.4 125.8-65.7 201.4L288 372.2V44.8zm0 0" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512">
                            <path fill="#ffc107" d="M288 8l69.3 211.5L567.9 236l-176.6 128.8 53.1 214.7L288 448l-156.5 120.5 53.1-214.7L8.1 236l210.6-16.5L288 8zm0 36.8l-65.7 201.4L79.3 244l173.4 125.8-65.7 201.4L288 372.2V44.8zm0 0" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512">
                            <path fill="#ffc107" d="M288 8l69.3 211.5L567.9 236l-176.6 128.8 53.1 214.7L288 448l-156.5 120.5 53.1-214.7L8.1 236l210.6-16.5L288 8zm0 36.8L222.3 246.2 79.3 244l173.4 125.8-65.7 201.4L288 372.2V44.8zm0 0" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512">
                            <path fill="#ffc107" d="M288 8l69.3 211.5L567.9 236l-176.6 128.8 53.1 214.7L288 448l-156.5 120.5 53.1-214.7L8.1 236l210.6-16.5L288 8zm0 36.8l-65.7 201.4L79.3 244l173.4 125.8-65.7 201.4L288 372.2V44.8zm0 0" />
                        </svg>

                    </div>
                </div>
                <Link to={`/${_id}`} > <button className='btn text-white bg-[#1C3F3A]'>View all details</button></Link>
            </div>

        </>
    );
};

export default AllToy;