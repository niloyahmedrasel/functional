import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
            <li className='hover:text-mytheme-gold scale-75'><Link>Home</Link></li>
            <li className='hover:text-mytheme-gold scale-75'><Link>Reservation</Link></li>
            <li className='hover:text-mytheme-gold scale-75'><Link>Menu</Link></li>
            <li className='hover:text-mytheme-gold scale-75'><Link>Order</Link></li>
            <li className='hover:text-mytheme-gold scale-75'><Link>History</Link></li>
            </ul>
          </div>
          <a className=" text-mytheme-gold ml-10 text-2xl">Flavor <span className='text-mytheme-crimson'>Fusion</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-mytheme-silver text-2xl px-1">
            <li className='hover:text-mytheme-gold scale-75'><Link to='/'>Home</Link></li>
            <li className='hover:text-mytheme-gold scale-75'><Link>Reservation</Link></li>
            <li className='hover:text-mytheme-gold scale-75'><Link>Menu</Link></li>
            <li className='hover:text-mytheme-gold scale-75'><Link>Order</Link></li>
            <li className='hover:text-mytheme-gold scale-75'><Link>History</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
        <Link to='/login'><button className='btn btn-warning m-5'>Login</button></Link>
        <Link to='/signup'><button className='btn btn-warning'>Sign Up</button></Link>
        </div>
      </div>
        </div>
    );
};

export default Navbar;