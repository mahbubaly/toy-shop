import React from 'react';
import Navbar from '../SharedPages/NavBar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedPages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />

        </div>
    );
};

export default Main;