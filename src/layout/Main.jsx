import React from "react";
import myImage from '../img/DSC04960-Улучшено-Ум. шума.jpg'
import myImage2 from '../img/DSC04804-Улучшено-Ум. шума-3.jpg'
import myImage3 from '../img/DSC04856-Улучшено-Ум. шума.jpg'
import myImage4 from '../img/DSC05068. второе.jpg'
import myImage5 from '../img/DSC05187. седьмое.jpg'
import myImage6 from '../img/DSC05439-2.jpg'

function Main() {
    return (
        <div className="container">
            <h1 className="name">Pavel   Zakharkin</h1>
            <p className="info">Studio/Street <span>photographer</span> from Russia, <span>Vladivostok</span>.</p>
            <div className="master-area">
                <div className="master-box">
                    <h4 className="master-title">Студийное фото</h4>
                    <p className="master-info">Фотосессия в <span>уютной студии</span></p>
                    <p className="master-price">Цена:  <span>2300 руб.</span>/час</p>
                    <button className="bt-buy"><a className="bt-link" href="https://vk.com/pahez_pahezzz">Написать автору</a></button>
                </div>
                <div className="master-box">
                    <h4 className="master-title">Уличное фото</h4>
                    <p className="master-info">Фотосессия на <span>открытом воздухе</span></p>
                    <p className="master-price">Цена:  <span>2500 руб.</span>/час</p>
                    <button className="bt-buy"><a className="bt-link" href="https://vk.com/pahez_pahezzz">Написать автору</a></button>
                </div>
            </div>
            <div className="master-area-2">
                <h2 className="stud-title">Студийное Фото</h2>
                <div className="photo-box">
                    <img className="ep" src={myImage}alt="фото" />
                    <img className="ep" src={myImage2} alt="фото" />
                    <img className="ep" src={myImage3} alt="фото" />
                </div>

                <h2 className="street-title">Уличное Фото</h2>
                <div className="photo-box">
                    <img className="ep" src={myImage4} alt="фото" />
                    <img className="ep" src={myImage5} alt="фото" />
                    <img className="ep" src={myImage6} alt="фото" />
                </div>
            </div>
        </div>
    )
}

export { Main }