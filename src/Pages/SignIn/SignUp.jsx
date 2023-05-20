import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../../Auths/AuthProvider';
AOS.init();

const SignUp = () => {
    const [error, setError] = useState('');
    const { CreateUser } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    const Navigate = useNavigate()
    const from = location.state?.form?.pathname || '/'

    const handlerSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        

        if (password !== confirm) {
            setError('Passwords do not match');
        }

        if (password.length <= 6) {
            setError('Password must be more than 6 characters');
        }
        CreateUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error.message);
                setError("Already used this email address!!");

            })
    }
    return (
        <>


            <div className='text-center mt-6 ' data-aos="fade-left">
                <h1 className='text-4xl font-semibold'>Welcome to toy shop !!</h1>
            </div>


            <div className="ml-[35%]  my-16">
                <div className=" flex-col  w-[100%]">
                    <div className="w-1/2 mr-12">

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl text-center font-bold "> Please log in!!!</h1>
                            <form onSubmit={handlerSignUp}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl">Full Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" />
                                </div>
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
                                        <span className="label-text text-xl">Confirm password</span>
                                    </label>
                                    <input type="password" name='confirm' placeholder="Confirm password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-[#1C3F3A] text-white" type="submit" value="sign up" />
                                </div>
                                <div>
                                    <h4 className='text-warning mt-5'> {error}</h4>
                                </div>
                            </form>
                            <p className='my-4 text-center'>I have already account? <Link className='text-orange-600 font-bold' to="/logIn">Log in</Link> </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SignUp;