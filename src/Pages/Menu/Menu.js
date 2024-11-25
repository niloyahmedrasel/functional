import React, { useEffect, useState } from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import SingleItem from './SingleItem';

const Menu = () => {

    

    const data =[1,2,3,4,5,6,7,8,9,10,11,12]

    return (
        <div>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10'>
            {
                data.map(element=><SingleItem></SingleItem>)
            }
            </div>
            
        </div>
    );
};

export default Menu;