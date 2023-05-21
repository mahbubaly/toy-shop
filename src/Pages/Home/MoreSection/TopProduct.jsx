import React from 'react';
import car1 from '../../../assets/images/Top/car-1.jpg'
import car2 from '../../../assets/images/Top/blu2.jpg'
import car3 from '../../../assets/images/Top/112.png'
import car4 from '../../../assets/images/Top//4.jpg'
import car5 from '../../../assets/images/Top/5_.jpg'
import car6 from '../../../assets/images/Top/6.jpg'
import car7 from '../../../assets/images/Top/11_.jpg'
import car8 from '../../../assets/images/Top/8_.jpg'
import car9 from '../../../assets/images/Top/9.jpg'
import car10 from '../../../assets/images/Top/10.jpg'
import car11 from '../../../assets/images/Top/123_.jpg'
import car12 from '../../../assets/images/Top/12.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const TopProduct = () => {
    return (
        <>

            <div className='text-center my-10'>
                <h1 className='text-3xl font-bold hover:underline text-orange-400'>Top Products</h1>
                <h3 className='text-xl my-3'>Our top sellers and recommendations</h3>
            </div>

            <div  >
                <div className="carousel w-full " >
                    <div id="item1" className="carousel-item w-full " >
                        <div className='grid grid-cols-1 lg:grid-cols-3' data-aos="fade-right" >
                            <div className="card w-96 bg-base-100 shadow-xl m-5 ">
                                <figure className="px-10 pt-10">
                                    <img src={car1} alt="" />
                                </figure>
                                <div className="card-body  ">
                                    <h2 className="card-title">Premium Cars Audi Q4 e-tron</h2>
                                    <p>Price: $18.99</p>
                                    <div className="card-actions">
                                        <button className="btn text-white bg-[#1C3F3A]">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-96 bg-base-100 shadow-xl m-5 ">
                                <figure className="px-10 pt-10">
                                    <img src={car2} alt="" />
                                </figure>
                                <div className="card-body  ">
                                    <h2 className="card-title">Premium Cars Audi Q4 e-tron</h2>
                                    <p>Price: $10.00</p>
                                    <div className="card-actions">
                                        <button className="btn text-white bg-[#1C3F3A]">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-96 bg-base-100 shadow-xl m-5 ">
                                <figure className="px-10 pt-10">
                                    <img src={car3} alt="" />
                                </figure>
                                <div className="card-body  ">
                                    <h2 className="card-title">Premium Cars Audi Q4 e-tron</h2>
                                    <p>Price: $14.5</p>
                                    <div className="card-actions">
                                        <button className="btn text-white bg-[#1C3F3A]">Buy Now</button>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <div className='grid grid-cols-1 lg:grid-cols-3' data-aos="fade-left" >
                            <div className="card w-96 bg-base-100 shadow-xl m-5 ">
                                <figure className="px-10 pt-10">
                                    <img src={car4} alt="" />
                                </figure>
                                <div className="card-body  ">
                                    <h2 className="card-title">Premium Cars Audi Q4 e-tron</h2>
                                    <p>Price: $12.99</p>
                                    <div className="card-actions">
                                        <button className="btn text-white bg-[#1C3F3A]">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-96 bg-base-100 shadow-xl m-5 ">
                                <figure className="px-10 pt-10">
                                    <img src={car5} alt="" />
                                </figure>
                                <div className="card-body  ">
                                    <h2 className="card-title">Premium Cars Audi Q4 e-tron</h2>
                                    <p>Price: $34.99</p>
                                    <div className="card-actions">
                                        <button className="btn text-white bg-[#1C3F3A]">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-96 bg-base-100 shadow-xl m-5 ">
                                <figure className="px-10 pt-10">
                                    <img src={car6} alt="" />
                                </figure>
                                <div className="card-body  ">
                                    <h2 className="card-title">Premium Cars Audi Q4 e-tron</h2>
                                     <p>Price: $12.99</p>
                                    <div className="card-actions">
                                        <button className="btn text-white bg-[#1C3F3A]">Buy Now</button>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <div className='grid grid-cols-1 lg:grid-cols-3' data-aos="fade-right">
                            <div className="card w-96 bg-base-100 shadow-xl m-5 ">
                                <figure className="px-10 pt-10">
                                    <img src={car7} alt="" />
                                </figure>
                                <div className="card-body  ">
                                    <h2 className="card-title">Premium Cars Audi Q4 e-tron</h2>
                                    <p>Price: $5.99</p>
                                    <div className="card-actions">
                                        <button className="btn text-white bg-[#1C3F3A]">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-96 bg-base-100 shadow-xl m-5 ">
                                <figure className="px-10 pt-10">
                                    <img src={car8} alt="" />
                                </figure>
                                <div className="card-body  ">
                                    <h2 className="card-title">Premium Cars Audi Q4 e-tron</h2>
                                    <p>Price: $15.99</p>
                                    <div className="card-actions">
                                        <button className="btn text-white bg-[#1C3F3A]">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-96 bg-base-100 shadow-xl m-5 ">
                                <figure className="px-10 pt-10">
                                    <img src={car9} alt="" />
                                </figure>
                                <div className="card-body  ">
                                    <h2 className="card-title">Premium Cars Audi Q4 e-tron</h2>
                                    <p>Price: $8.00</p>
                                    <div className="card-actions">
                                        <button className="btn text-white bg-[#1C3F3A]">Buy Now</button>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <div className='grid grid-cols-1 lg:grid-cols-3' data-aos="fade-left" >
                            <div className="card w-96 bg-base-100 shadow-xl m-5 ">
                                <figure className="px-10 pt-10">
                                    <img src={car10} alt="" />
                                </figure>
                                <div className="card-body  ">
                                    <h2 className="card-title">Premium Cars Audi Q4 e-tron</h2>
                                    <p>Price: $12.99</p>
                                    <div className="card-actions">
                                        <button className="btn text-white bg-[#1C3F3A]">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-96 bg-base-100 shadow-xl m-5 ">
                                <figure className="px-10 pt-10">
                                    <img src={car11} alt="" />
                                </figure>
                                <div className="card-body  ">
                                    <h2 className="card-title">Premium Cars Audi Q4 e-tron</h2>
                                    <p>Price: $12.55</p>
                                    <div className="card-actions">
                                        <button className="btn text-white bg-[#1C3F3A]">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-96 bg-base-100 shadow-xl m-5 ">
                                <figure className="px-10 pt-10">
                                    <img src={car12} alt="" />
                                </figure>
                                <div className="card-body  ">
                                    <h2 className="card-title">Premium Cars Audi Q4 e-tron</h2>
                                    <p>Price: $7.99</p>
                                    <div className="card-actions">
                                        <button className="btn text-white bg-[#1C3F3A]">Buy Now</button>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>




        </>
    );
};

export default TopProduct;
