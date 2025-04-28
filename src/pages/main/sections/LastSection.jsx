import React from 'react';
import uzb from '../../../assets/images/last1.png'


const LastSection = () => {
    return (
        <div className='last'>
            <div className="container">
                <div className="last__inner">
                    <div className="last__head">
                        <p className="desc">4-kursni bitirganda esa bittada Buyuk Britaniyaning va O'zbekistonning bakalavr diplomlariga ega bo'lasiz</p>
                        <div className='imgs'>
                            <img src={uzb} alt="img"/>
                        </div>
                    </div>
                    <div className="last__body">
                        <h2 className="title">Davlat rahbari va PDP University asoschisi o’rtasida bo’lib o’tgan muloqot</h2>
                        <div className="video">
                            <div className="video__titles">
                                <h3 className="title">Bu yil ham imkoniyatni o'tkazib yubormang</h3>
                                <a className='ariza' href="#application">Ariza qoldiring</a>
                            </div>
                            <div className="video__iframe">
                                <iframe
                                    src="https://www.youtube.com/embed/7i7miqyB8wY?si=KomBBLK2onn4mOJW"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
};

export default LastSection;