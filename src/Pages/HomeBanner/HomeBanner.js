import React from 'react';
import Navbar from "../../Component/Navbar/Navbar"
import "./HomeBanner.css"
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
const HomeBanner = () => {

    const [text] =useTypewriter(
        {
            words:["EVERY FLAVOR TELLS A STORY"],
            loop:0
        }
    )
    return (
        <div className='backgroundImage h-screen'>
        <div>
        <Navbar></Navbar>
            <h1 className='text-mytheme-gold font-bold mt-28 text-xl'>Delightfull Experience</h1>
            <h1 className='text-6xl mt-28 text-mytheme-white'>{text}<span><Cursor cursorColor='white'></Cursor></span></h1>
            <h1 className='mt-8 text-mytheme-white text-2xl'>come with family & fell the mouthwatering food<span></span></h1>

            <button className="button"><Link to="/reservation">Book A Table</Link></button>
        </div>  
        </div>
    );
};

export default HomeBanner;