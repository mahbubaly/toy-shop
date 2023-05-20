import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../../Auths/AuthProvider';
AOS.init();
import google from '../../assets/images/social/google-removebg-preview.png';
import fb from '../../assets/images/social/Facebook-logo.png';

const LogIn = () => {
    const [error, setError] = useState('');
    const { signIn, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    const Navigate = useNavigate()
    const from = location.state?.form?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        setError('');
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                Navigate(from, { replace: true });



            })
            .catch(error => {
                console.error(error);
                setError("Invalid password!!")
            })
    }


    const googleHandler = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();

            })
            .catch(error => {
                console.error(error);
                setError("Invalid password!!")
            })



    }
    return (
        <>
            <div className='text-center mt-6 ' data-aos="fade-right">
                <h1 className='text-4xl font-semibold'>Welcome to toy shop !!</h1>
            </div>

            <div className="ml-[35%]  my-16">
                <div className=" flex-col  w-[100%]">
                    <div className="w-1/2 mr-12">

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl text-center font-bold "> Please log in!!!</h1>
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-[#1C3F3A] text-white" type="submit" value="Login" />
                                </div>
                            </form>
                            <h1 className='mt-4 text-xl text-center'>Or sign with </h1>
                            <div className='flex gap-5'>

                                <div onClick={googleHandler} className='flex gap-5 items-center justify-center border-2 p-1 rounded-xl hover:shadow-lg'>
                                    <img className='w-[40px] h-[40px]' src={google} alt="" />
                                    <h1>Google</h1>

                                </div>
                                <div className='flex gap-5 items-center justify-center border-2 p-1 rounded-xl hover:shadow-lg'>
                                    <img className='w-[50px] h-[40px]' src={fb} alt="" />
                                    <h1>Facebook</h1>

                                </div>

                            </div>
                            <div>
                                <h1 className='text-center text-warning mt-3'>{error}</h1>
                            </div>

                            <p className='my-4 text-center'>Create new account? <Link className='text-orange-600 font-bold' to="/signUp">Sign Up</Link> </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default LogIn;