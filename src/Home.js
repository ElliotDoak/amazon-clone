import React from 'react';
import './Home.css';
import Product from './Product'

function Home() {
    return (
        <div className="home"> 
            <div className="home__container">
                <img className="home__img" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
                
                <div className="home__row">
                    <Product id={1} title="AMAZON Echo Dot (4th Gen) - Charcoal" price={50.00} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGYzIuFFrVM6Tlw0KgbF0OPZtIrkexoh89mp8ViKFB-Toa9MGPy-6wGP3lpe9G3deu5fA5Ndw&usqp=CAc" rating={3}/>
                    <Product id={2} title="Sony PlayStation 4 500GB Console - Black" price={259.00} image="https://images-na.ssl-images-amazon.com/images/I/415tZH2vjXL._AC_.jpg" rating={4}/> 
                </div>

                <div className="home__row">
                    <Product id={3} title="Sapiens: A Brief History of Humankind" price={14.99} image="https://images-na.ssl-images-amazon.com/images/I/41yu2qXhXXL._SX324_BO1,204,203,200_.jpg" rating={5}/>
                    <Product id={4} title="No Rules Rules: Netflix and the Culture of Reinvention " price={8.99} image="https://images-na.ssl-images-amazon.com/images/I/81Dg7P7KFFL.jpg" rating={4}/> 
                    <Product id={5} title="The Midnight Library" price={12.00} image="https://cdn.waterstones.com/override/v1/large/9781/7868/9781786892737.jpg" rating={4}/>  
                </div>

                <div className="home__row">
                    <Product id={6} title="Samsung The Frame Hospitality TV 43'' QLED2020" price={999.51} image="https://images-na.ssl-images-amazon.com/images/I/41MMFsxHBDL._AC_SX355_.jpg" rating={4}/> 
                </div>

            </div>
        </div>
    )
}

export default Home
