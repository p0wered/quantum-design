import React, {useEffect, useState} from 'react';
import {ProductsData} from '../products.js';
import {NewsData} from '../news.js';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from 'aos'
import 'aos/dist/aos.css'
import {NavLink} from "react-router-dom";
import NorthVideo from '../assets/north-case.mp4'
import CreatorImg from '../assets/streamer-img.jpg';
import RiserImg from '../assets/card-riser.jpg';
import DotAwardImg from '../assets/dot-award.jpg';
import {NewsItem} from "./news-page";
import {Footer} from "../App";

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

    products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    products.forEach((product) => {
        if (product.discount !== 0){
            slides.push(
                <SaleCard product={product}/>
            );
        }
    });

    return (
        <Slider {...settings}>
            {slides}
        </Slider>
    );
}

function ProductSection({video, title, desc, category}) {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className='product-section'>
            <video className='product-video' src={video} loop autoPlay></video>
            <div className='flexbox-column' data-aos='fade-in' data-aos-duration='800'>
                <h1>{title}</h1>
                <h4 style={{fontWeight:     400, letterSpacing: 3}}>{desc}</h4>
                <div className='button-list'>
                    <button className='button-product'>BUY</button>
                    <button className='button-product'>SEE ALL {category}</button>
                </div>
            </div>
        </div>
    )
}

function SaleSection() {
    let [currentWidth, setCurrentWidth] = useState(window.innerWidth);

    window.addEventListener('resize', function (){
        setCurrentWidth(window.innerWidth)
    })

    return (
        <div className='sale-section'>
            <h2 style={{color: 'white'}}>BEST SALES</h2>
            <div className='slider-container'>
                <SimpleSlider slidesAmount={currentWidth < 1200 ? 3 : 4} slidesPerScroll={currentWidth < 1200 ? 1 : 4} products={ProductsData}/>
            </div>
        </div>
    );
}

function SaleCard({product}) {
    let finalPrice = product.price * (1 - product.discount / 100);
    finalPrice = finalPrice.toFixed(2);

    return (
        <div className='sale-card'>
            <img src={product.image} alt={product.name}/>
            <div className='sale-card-info'>
                <p>{product.name}</p>
                <div className='flexbox-center flexbox-row' style={{gap: 8}}>
                    <p className='discounted'>${product.price}</p>
                    <p>${finalPrice}</p>
                </div>
            </div>
        </div>
    );
}

function NewsSection({data}) {
    return (
        <div className='news-section'>
            <div className='container news-container'>
                <NavLink to={data[0]["path"]} className='news-section-link link-large'><NewsItem large={true} title={data[0]["title"]} image={CreatorImg}/></NavLink>
                <div className='news-flexbox'>
                    <NavLink to={data[1]["path"]} className='news-section-link'><NewsItem large={false} title={data[1]["title"]} image={RiserImg}/></NavLink>
                    <NavLink to={data[2]["path"]} className='news-section-link'><NewsItem large={false} title={data[2]["title"]} image={DotAwardImg}/></NavLink>
                </div>
                <div className='show-news'>
                    <NavLink to='/news'><p>SHOW ALL NEWS</p></NavLink>
                </div>
            </div>
        </div>
    );
}

function BlogSection (){
    return(
        <div className='blog-section'>
            <div className='container blog-container' style={{padding: '6rem 2rem'}}>
                <div className='blog-flexbox'>
                    <div>
                        <h3 style={{marginBottom: '1rem'}}>Sign up to our newsletter</h3>
                        <p>
                            Keep abreast of what we’re working on, what’s hot and what might be right around the
                            corner.
                            By signing up to the Fractal Design newsletter, you automatically accept our terms
                        </p>
                    </div>
                    <form action="#" className='flexbox-column' style={{gap: '1.325rem', alignItems: 'end'}}>
                        <input type="text" placeholder='Email'/>
                        <input type="text" placeholder='Name'/>
                    </form>
                </div>
                <button className='button-product sub-button'>SUBSCRIBE</button>
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <div>
            <ProductSection video={NorthVideo} title='NORTH' desc='Transform your gaming space' category='CASES'/>
            <SaleSection/>
            <NewsSection data={NewsData}/>
            <BlogSection/>
            <Footer/>
        </div>
    );
}

