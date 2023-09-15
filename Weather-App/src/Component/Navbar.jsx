// src/components/Navbar.js

import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl text-white font-semibold">Weather App</h1>
                <ul className="flex space-x-4 text-white">
                    <li><a href="#" className="hover:underline">Home</a></li>
                    <li><a href="#" className="hover:underline">Contact</a></li>
                    <li><a href="#" className="hover:underline">About Us</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
