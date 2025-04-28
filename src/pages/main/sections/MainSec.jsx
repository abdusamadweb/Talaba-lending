import React from 'react';
import logo from "../../../assets/images/logo.svg";
import about1 from "../../../assets/images/about1.png";
import about2 from "../../../assets/images/about2.png";

const MainSec = () => {
    return (
        <section className="main">
            <div className='hero container relative'>
                <div className="main__head row between align-center">
                    <a className='logo' href="/">
                        <img src={logo} alt="logo"/>
                    </a>
                    <a className='btn' href='#application'>Ariza topshirish</a>
                </div>
                <div className="main__body center-absolute">
                    <h2 className="title">O’zbekistondagi xalqaro
                        IT universiteti talabasi bo’ling!|</h2>
                    <a className="btn ariza" href='#application'>Ariza topshirish</a>
                </div>
            </div>
            <div className="info container">
                <div className="info__titles width">
                    <h3 className="title">PDP University kirish imtihonlarida qatnashish uchun
                        5ta fandan tayyorlanish
                        shart emas!</h3>
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
            </div>
        </section>
    );
};

export default MainSec;