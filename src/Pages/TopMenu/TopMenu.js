import React from 'react';
import firtsImage from '../../assets/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai (1).jpg'
import secondImage from "../../assets/peakpx.jpg"
import thirdImage from "../../assets/pic11.jpeg"
import TopMenuCard from './TopMenuCard';

const TopMenu = () => {

    const data = [
        {
            title:"Breakfast",
            img:firtsImage
        },
        {
            title:"Lunch",
            img:secondImage
        },
        {
            title:"Dinner",
            img:thirdImage
        },
    ]
    return (
        <div className='h-screen'>
            <h1 className='mt-20 text-mytheme-gold text-lg font-bold'>FLAVORS FOR ROYALITY</h1>
            <h1 className='text-8xl font-bold text-white mt-5'>We Offer Top Notch</h1>
            <h1 className='font-bold text-mytheme-gold mt-10 text-xl'>"Indulge in an exquisite culinary journey,<br></br>
            where flavors dance on your palate,<br></br>
            embracing your senses with every bite."</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5'>
            {
                data.map(card=> <TopMenuCard key={card.title} card={card}></TopMenuCard>)
            }
            </div>
            
        </div>
    );
};

export default TopMenu;