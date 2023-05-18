import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Bikes = ({ bikes }) => {
    console.log(bikes);
    const { name, price, description, image, brand } = bikes;
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl p-5 hover:shadow-2xl " data-aos="fade-left">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {brand}

                    </h2>

                    <p><span className='text-xl font-bold'>{name}: </span>  {description}</p>

                    <div className=" btn btn-outline my-3 bg-[#1C3F3A] text-white hover:bg-[#1C3F3A] text-2xl font-semibold">Price: $ {price}</div>

                    {/* The button to open modal */}
                    <label htmlFor="my-modal" className="btn btn-outline text-2xl font-semibold">
                        View more
                    </label>

                    {/* Put this part before </body> tag */}

                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg"> {brand}</h3>
                            <p className="py-4">{description}</p>
                            <div className="modal-action">
                                <label htmlFor="my-modal" className="btn">Cancel</label>
                            </div>
                        </div>
                    </div>




                </div>
            </div>

        </>
    );
};

export default Bikes;