import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const LogIn = () => {

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        // signIn(email, password)
        //     .then(result => {
        //         const user = result.user;
        //         console.log(user);
        //     })
        //     .catch(error => console.log(error));
    }
    return (
        <>
            <div className='text-center mt-6 ' data-aos="fade-right">
                <h1  className='text-4xl font-semibold'>Welcome to toy shop !!</h1>
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
                                    <input type="text" name='email' placeholder="Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl">Password</span>
                                    </label>
                                    <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-[#1C3F3A] text-white" type="submit" value="Login" />
                                </div>
                            </form>
                            <p className='my-4 text-center'>Create new account? <Link className='text-orange-600 font-bold' to="/signUp">Sign Up</Link> </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default LogIn;