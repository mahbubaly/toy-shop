import React from 'react';
import img1 from '../../../assets/images/Banner/te.jpeg';
import img2 from '../../../assets/images/Banner/jon.jpg';
import img3 from '../../../assets/images/Banner/Tonny 1.jpg';


const SectionTwo = () => {
    return (
        <>
            <div className='my-9 text-center space-y-3'>
                <h1 className='text-3xl font-semibold text-center'>we are provide our service  from <br />
                    different location? </h1>
                <p className='my-3'> A, pariatur quasi explicabo consectetur dolorem fuga deleniti minima voluptatem odit blanditiis, expedita doloribus officiis neque <br /> beatae dicta quo numquam veritatis omnis cum. Nam iusto expedita ut similique corporin </p>


                







            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mx-auto lg:ml-9 ml-0'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img1} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Tonny benboken</h2>
                        <p>He had 25years experience about toy!! Achieve 10+ international award and 20+ national awards</p>
                        
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img2} /></figure>
                    <div className="card-body">
                    <h2 className="card-title">USMAM UZKI</h2>
                        <p>He had 25years experience about toy!! Achieve 10+ international award and 20+ national awards</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img3} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Jaman kobir</h2>
                        <p>He had 25years experience about toy!! Achieve 10+ international award and 20+ national awards</p>
                    </div>
                </div>
            </div>




        </>
    );
};

export default SectionTwo;