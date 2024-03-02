import NorthImg from '../assets/north.jpg';
import ProductImg from '../assets/products.jpg'
import React, {useEffect, useState} from 'react';
import ProductsData from '../products.json';
import NewsData from '../news.json';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from 'aos'
import 'aos/dist/aos.css'
import {NavLink, Route, Routes} from "react-router-dom";
import NewsPage from "./news-page";
import data from "bootstrap/js/src/dom/data";
import CreatorProgramPage from "./news/creator-program";

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
                <h4 style={{fontWeight: 400, letterSpacing: 3}}>{desc}</h4>
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

function NewsSection({data}) {
    return (
      <div className='news-section'>
          <div className='container news-container'>
              <h1>LATEST NEWS</h1>
              <NavLink to={data[0]["path"]} className='news-section-link link-large'><NewsItem large={true} title={data[0]["title"]}/></NavLink>
              <div className='news-flexbox'>
                  <NavLink to={data[1]["path"]} className='news-section-link'><NewsItem large={false} title={data[1]["title"]}/></NavLink>
                  <NavLink to={data[2]["path"]} className='news-section-link'><NewsItem large={false} title={data[2]["title"]}/></NavLink>
              </div>
              <div className='show-news'>
                  <NavLink to='/news'><p>SHOW ALL NEWS</p></NavLink>
              </div>
        </div>
      </div>
    );
}

function NewsItem({large, title, image}) {
    let size;
    if (large) {
        size = 'news-section-item large-item'
    } else {
        size = 'news-section-item'
    }

    return (
      <div className={size} style={{backgroundImage: `url(${image})`}}>
          <h2>{title}</h2>
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
            <NewsSection data={NewsData}/>
            <Routes>
                <Route path="/news" element={<NewsPage/>}/>
                <Route path={NewsData[0]["path"]} element={<CreatorProgramPage/>}></Route>
            </Routes>
        </div>
    );
}

