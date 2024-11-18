import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import TopMenu from '../TopMenu/TopMenu';
import Footer from '../../Component/Footer/Footer';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <TopMenu></TopMenu>
            <Footer></Footer>
        </div>
    );
};

export default Home;