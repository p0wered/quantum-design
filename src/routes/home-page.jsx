import NorthImg from '../assets/north.jpg';
import ProductImg from '../assets/products.jpg'
import React, {useEffect, useState} from 'react';
import {PRODUCTS} from './products';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from 'aos'
import 'aos/dist/aos.css'

function SimpleSlider({ slidesAmount, slidesPerScroll, products }) {
    let settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: slidesAmount,
        slidesToScroll: slidesPerScroll,
        adaptiveHeight: true
    };

    let slides = [];
    products.forEach((product) => {
        slides.push(
            <SaleCard product={product} image={ProductImg}/>
        );
    });

    return (
        <Slider {...settings}>
            {slides}
        </Slider>
    );
}

function ProductSection({image, title, desc, category}) {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className='product-section image-box' style={{backgroundImage: `url(${image})`}}>
            <div className='flexbox-column' data-aos='fade-in' data-aos-duration='800'>
                <h1>{title}</h1>
                <h4 style={{fontWeight: 400, letterSpacing: 4}}>{desc}</h4>
                <div className='button-list'>
                    <button className='button-product'>BUY</button>
                    <button className='button-product'>SEE ALL {category}</button>
                </div>
            </div>
        </div>
    )
}

function SaleSection() {
    let [currentWidth, setCurrentWidth] = useState(1920);

    window.addEventListener('resize', function (){
        setCurrentWidth(window.innerWidth)
    })

    return (
        <div className='sale-section'>
            <h2 style={{color: 'white'}}>BEST SALES</h2>
            <div className='slider-container'>
                <SimpleSlider slidesAmount={currentWidth < 1200 ? 3 : 4} slidesPerScroll={currentWidth < 1200 ? 1 : 4} products={PRODUCTS}/>
            </div>
        </div>
    );
}

function SaleCard({product, image}) {
    return (
        <div className='sale-card' style={{backgroundImage: `url(${image})`}}>
            <div className='sale-card-info'>
                <p>{product.name}</p>
                <p>{product.price}</p>
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

