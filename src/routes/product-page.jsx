import Slider from "react-slick";
import React from "react";
import Test from '../products/North_White_Mesh_1-Left-Front-540x540.webp';
import {Link} from "react-router-dom";

function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="slider-container" style={{width: 540, padding: 0}}>
            <Slider {...settings}>
                <div>
                    <img src={Test}/>
                </div>
                <div>
                    <img src={Test}/>
                </div>
                <div>
                    <img src={Test}/>
                </div>
            </Slider>
        </div>
    );
}

function PagePath() {
    return (
        <div className='product-path flexbox-center'>
            <Link to='/'>START/</Link>
            <Link to='/shop'>SHOP/</Link>
            <p style={{color: 'black'}}>NORTH</p>
        </div>
    );
}

export default function ProductPage() {
    return (
        <div>
            <div style={{height: 88}}></div>
            <PagePath/>
            <div className='container' style={{backgroundColor: 'white'}}>
                <div className='product-container'>
                    <div>
                        <SimpleSlider/>
                    </div>
                    <div className='flexbox-center' style={{width: '100%'}}>
                        <div className='flexbox-column' style={{gap: '1rem'}}>
                            <h2 style={{fontWeight: 600, lineHeight: 0.7}}>North</h2>
                            <p>39.99$</p>
                            <button className='button-product'>ADD TO CART</button>
                        </div>
                    </div>
                </div>
                <div className='text-box'>
                    <h4>Transform your gaming space</h4>
                    <p>North reimagines the gaming PC, introducing natural materials and bespoke details to make gaming
                        a stylish addition to the living space. Fusing design and airflow engineering, the case features fine-patterned mesh ventilation and an open front with real walnut or oak panels. The design is complemented by sleek brass or steel details and an integrated tab for easy access to the top of the case. Inside, North offers an intuitive interior layout and generous compatibility. </p>
                </div>
            </div>
        </div>
    )
}