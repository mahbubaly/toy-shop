import React from 'react';
import errorLogo from '../assets/images/ErrorPage/download.svg'
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    return (
        <div className='flex justify-center mt-[100px]' >
            <div>
                <img className='w-[100%]' src={errorLogo} alt="" />
                <div className='text-center'>
                    <h1>Oops!</h1>
                    <p>You got big fish, please wait until it catch </p>
                    <p>
                        <i>{error.statusText || error.message}</i>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Error;