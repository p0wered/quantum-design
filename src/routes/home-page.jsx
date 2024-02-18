import NorthImg from '../assets/north.jpg';
import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider({ slidesNumber }) {
    let settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true
    };
    return (
        <Slider {...settings}>
            <div className='sale-card'></div>
            <div className='sale-card'></div>
            <div className='sale-card'></div>
            <div className='sale-card'></div>
            <div className='sale-card'></div>
            <div className='sale-card'></div>
            <div className='sale-card'></div>
            <div className='sale-card'></div>
        </Slider>
    );
}

function ProductSection({image, title, desc, category}) {
    let backgroundImg = {backgroundImage: `url(${image})`}

    return (
        <div className='product-section image-box' style={backgroundImg}>
            <h1>{title}</h1>
            <h4 style={{fontWeight: 400, letterSpacing: 4}}>{desc}</h4>
            <div className='button-list'>
                <button className='button-product'>BUY</button>
                <button className='button-product'>SEE ALL {category}</button>
            </div>
        </div>
    )
}

function SaleSection() {
    let slidesNumber;
    (window.width > 1200) ? slidesNumber = 4 : slidesNumber = 3

    return (
        <div className='sale-section'>
            <h2>BEST SALES</h2>
            <div className='slider-container'>
                <SimpleSlider slidesNumber={slidesNumber}/>
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <div>
            <ProductSection image={NorthImg} title='NORTH' desc='Transform your gaming space' category='CASES'/>
            <SaleSection/>
            <ProductSection/>
        </div>
    );
}

