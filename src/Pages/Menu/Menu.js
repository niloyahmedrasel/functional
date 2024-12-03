import React, { useEffect, useState } from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import SingleItem from './SingleItem';

const Menu = () => {
const [data,setData] = useState([])

useEffect(() =>{
    fetch('http://localhost:5000/api/menu/allItem')
    .then((response) => response.json())
    .then(data => setData(data))
    
},[])
    return (
        <div>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10'>
            {
                data.map((element,index)=><SingleItem key={index} element={element}></SingleItem>)
            }
            </div>
            
        </div>
    );
};

export default Menu;