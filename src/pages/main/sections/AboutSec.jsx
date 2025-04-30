import React from 'react';
import img from '../../../assets/images/about-img.png'
import card1 from '../../../assets/images/about-card1.png'
import card2 from '../../../assets/images/about-card2.png'
import {Link} from "react-router-dom";

const AboutSec = () => {
    return (
        <section className='about'>
            <div className="container">
                <div className="about__inner">
                    <div className="wrapper">
                        <div className="about__titles">
                            <h3 className="title">
                                Talabalarimizga bu jarayonni yanada osonlashtirish uchun maxsus qo'llanmalar va yordam taklif etiladi.</h3>
                        </div>
                        <img className="about__img" src={img} alt="img"/>
                        <Link className='ariza' to='/application'>Ariza topshirish</Link>
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
                                    <p className="card__desc"><span>3-kursdan boshlab</span> Mahalliy va Xalqaro kompaniyalarda ish topish imkoniyatiga ega bo'lishadi.
                                    </p>
                                </div>
                                <span className='card__price'>300$ - 400$</span>
                            </div>
                            <div className="card">
                                <div>
                                    <img className='card__img' src={card2} alt="img"/>
                                    <p className="card__desc"><span>4-kursni</span> Universitetni bitirgan talabalarga O'zbekiston diplomi beriladi.</p>
                                </div>
                                <span className='card__price'>1000$</span>
                            </div>
                        </div>
                        <Link className='ariza' to='/application'>Ariza topshirish</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSec;