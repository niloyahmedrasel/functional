import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check for userId in localStorage
        const userId = localStorage.getItem("userId");
        setIsLoggedIn(!!userId); // Convert to boolean
    }, []);

    const handleLogout = () => {
        // Remove userId from localStorage
        localStorage.removeItem("userId");
        setIsLoggedIn(false);
        toast.success("successfully logged out")
    };

    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li className='hover:text-mytheme-gold scale-75'><Link to="/">Home</Link></li>
                            <li className='hover:text-mytheme-gold scale-75'><Link to="/reservation">Reservation</Link></li>
                            <Link to="/menu"><li className='hover:text-mytheme-gold scale-75'>Menu</li></Link>
                            <li className='hover:text-mytheme-gold scale-75'><Link to="/order">Order</Link></li>
                            <li className='hover:text-mytheme-gold scale-75'><Link to="/history">History</Link></li>
                        </ul>
                    </div>
                    <a className="text-mytheme-gold ml-10 text-2xl">Flavor <span className='text-mytheme-crimson'>Fusion</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-mytheme-silver text-2xl px-1">
                        <Link to="/"><li className='hover:text-mytheme-gold scale-75 mt-2'>Home</li></Link>
                        <Link to="/reservation"><li className='hover:text-mytheme-gold scale-75 mt-2'>Reservation</li></Link>
                        <Link to="/menu"><li className='hover:text-mytheme-gold scale-75 mt-2'>Menu</li></Link>
                        <Link to="/order"><li className='hover:text-mytheme-gold scale-75 mt-2'>Order</li></Link>
                        <Link to="/history"><li className='hover:text-mytheme-gold scale-75 mt-2'>History</li></Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    {isLoggedIn ? (
                        <button onClick={handleLogout} className='btn btn-warning m-5'>Logout</button>
                    ) : (
                        <>
                            <Link to='/login'><button className='btn btn-warning m-5'>Login</button></Link>
                            <Link to='/signup'><button className='btn btn-warning'>Sign Up</button></Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
