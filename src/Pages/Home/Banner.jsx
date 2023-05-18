import React from 'react';
import banner1 from '../../assets/images/Banner/1.jpg'
import banner2 from '../../assets/images/Banner/2.jpg'
import banner3 from '../../assets/images/Banner/3.jpg'
import '../../Pages/styles.css';

const Banner = () => {
    return (
        <>

            <div className="carousel w-full bannerAll">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src={banner1} className="w-full " />

                    <div className="absolute  flex items-center pl-4 lg:pl-[100px]  transform  left-0  top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full ">
                        <div className='text-white w-[500px] font-semibold'>
                            <h2 className='lg:text-[60px]'>Affordable Price for buying car for your babies</h2>
                            <p className='my-3'>"Discover the joy of endless adventures with our collection of car toys, igniting your imagination and fueling your desire to experience the real thrill of owning a magnificent car!"</p>

                            <button className="btn bg-[#FF3811] mr-5 ">Latest collections</button>
                            <button className="btn btn-outline text-white">All categories</button>

                        </div>
                    </div>


                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full" />



                    <div className="absolute  flex items-center pl-4 lg:pl-[100px]  transform  left-0  top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full ">
                        <div className='text-white w-[500px] font-semibold'>
                            <h2 className='lg:text-[60px]'>Affordable Price for buying car for your babies</h2>
                            <p className='my-3'>"Discover the joy of endless adventures with our collection of car toys, igniting your imagination and fueling your desire to experience the real thrill of owning a magnificent car!"</p>

                            <button className="btn bg-[#FF3811] mr-5 ">Latest collections</button>
                            <button className="btn btn-outline text-white">All categories</button>

                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full" />
                    <div className="absolute  flex items-center pl-4 lg:pl-[100px]  transform  left-0  top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full ">
                        <div className='text-white w-[500px] font-semibold'>
                            <h2 className='lg:text-[60px]'>Affordable Price for buying car for your babies</h2>
                            <p className='my-3'>"Discover the joy of endless adventures with our collection of car toys, igniting your imagination and fueling your desire to experience the real thrill of owning a magnificent car!"</p>

                            <button className="btn bg-[#FF3811] mr-5 ">Latest collections</button>
                            <button className="btn btn-outline text-white">All categories</button>

                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full" />
                    <div className="absolute  flex items-center pl-4 lg:pl-[100px]  transform  left-0  top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full ">
                        <div className='text-white w-[500px] font-semibold'>
                            <h2 className='lg:text-[60px]'>Affordable Price for buying car for your babies</h2>
                            <p className='my-3'>"Discover the joy of endless adventures with our collection of car toys, igniting your imagination and fueling your desire to experience the real thrill of owning a magnificent car!"</p>

                            <button className="btn bg-[#FF3811] mr-5 ">Latest collections</button>
                            <button className="btn btn-outline text-white">All categories</button>

                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Banner;