import React from 'react';
import img from '../../../assets/images/about-img.png'
import card1 from '../../../assets/images/about-card1.png'
import card2 from '../../../assets/images/about-card2.png'

const AboutSec = () => {
    return (
        <section className='about'>
            <div className="container">
                <div className="about__inner">
                    <div className="wrapper">
                        <div className="about__titles">
                            <h3 className="title">Agar siz ingliz tilini ham bilmasangiz ham PDP
                                University'ning o'zida 2 yil chuqurlashtirilgan ingliz tili
                                kurslarida o'qib IELTS'dan 6+ darajaga erishasiz</h3>
                        </div>
                        <img className="about__img" src={img} alt="img"/>
                        <a className="ariza" href='#application'>Ariza topshirish</a>
                    </div>
                    <div className="about__content">
                        <div className="card main-card">
                            <span className="card__title">3-kursdan boshlab</span>
                            <p className='card__desc'>Universitetda o'qish bilan birgalikda <span>Mahalliy</span> va <span>Xalqaro kompaniyalarda</span> ishlashingiz mumkin.
                                O'qishni bitirmasdan turib ishlash karyerangizni boshlashingiz
                                uchun eng katta imkoniyat bo'ladi.</p>
                        </div>
                        <div className="grid">
                            <div className="card">
                                <div>
                                    <img className='card__img' src={card1} alt="img"/>
                                    <p className="card__desc">Talabalarimizdan kutayotgan natijalarimiz <span>3-kursdan boshlab</span> minimum
                                    </p>
                                </div>
                                <span className='card__price'>300$ - 400$</span>
                            </div>
                            <div className="card">
                                <div>
                                    <img className='card__img' src={card2} alt="img"/>
                                    <p className="card__desc"><span>4-kursni</span> bitirgandan so'ng esa</p>
                                </div>
                                <span className='card__price'>1000$</span>
                            </div>
                        </div>
                        <a className='ariza' href="/#application">Ariza topshirish</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSec;