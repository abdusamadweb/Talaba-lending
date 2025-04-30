import React from 'react';
import logo from "../../../assets/images/logo.svg";
import about1 from "../../../assets/images/about1.png";
import about2 from "../../../assets/images/about2.png";
import {Link} from "react-router-dom";

const MainSec = () => {
    return (
        <section className="main">
            <div className="bg1 bg"/>
            <div className="bg2 bg"/>
            <div className='hero container relative'>
                <div className="main__head row between align-center">
                    <a className='logo' href="/">
                        <img src={logo} alt="logo"/>
                    </a>
                    <Link className='btn' to='/application'>Ariza topshirish</Link>
                </div>
                <div className="main__body center-absolute">
                    <h2 className="title">O’zbekistondagi universitetlarga hujjat topshirishning eng oson yo'li!</h2>
                    <Link className='ariza' to='/application'>Ariza topshirish</Link>
                </div>
            </div>
            <div className="info container relative">
                <div className="info__titles width">
                    <h3 className="title">
                        Talaba bo'ling!
                        O'zbekistonning eng yaxshi universitetlariga o'qishga kirish uchun Talaba Portal yordamida oson
                        ariza yuborishingiz mumkin.</h3>
                </div>
                <div className="info__content width">
                    <div className="wrapper">
                        <div className="item">
                            <h4 className="item__title">2 ta fandan imtihon</h4>
                            <p className="item__desc">5 ta emas, atigi 2 ta fandan imtihon topshirib
                                talaba bo'lishni istaysizmi?</p>
                        </div>
                        <div className="item">
                            <h4 className="item__title">Talaba bo’ling</h4>
                            <p className="item__desc">O'zbekistonda turib xalqaro universitet
                                talabasi bo'lishni xohlaysizmi?</p>
                        </div>
                    </div>
                    <div className="wrapper cards">
                        <div className="item">
                            <img src={about1} alt="icon"/>
                            <span>Matemeatika</span>
                        </div>
                        <div className="item">
                            <img src={about2} alt="icon"/>
                            <span>Mantiq</span>
                        </div>
                    </div>
                </div>
                <div className="bg3 bg"/>
            </div>
        </section>
    );
};

export default MainSec;