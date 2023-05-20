import React from 'react';
import faq from '../../assets/images/social/Frequentlyjpg.jpg'

const Blogs = () => {
    return (
        <>

            <div className='my-32 flex'>
                <img src={faq} alt="" />

                <div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Focus me to see content
                        </div>
                        <div className="collapse-content">
                            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Blogs;