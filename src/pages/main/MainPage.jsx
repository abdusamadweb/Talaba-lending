import './MainPage.scss'
import React from 'react';
import MainSec from "./sections/MainSec.jsx";
import AboutSec from "./sections/AboutSec.jsx";
import LastSection from "./sections/LastSection.jsx";

const MainPage = () => {
    return (
        <div className='main-page'>
            <MainSec />
            <AboutSec />
            <LastSection />
        </div>
    );
};

export default MainPage;