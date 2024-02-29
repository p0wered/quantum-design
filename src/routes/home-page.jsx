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
              <NewsItem large={true} title={data[0]["title"]} desc={data[0]["desc"]}/>
              <div className='news-flexbox'>
                  <NewsItem large={false} title={data[1]["title"]} desc={data[1]["desc"]}/>
                  <NewsItem large={false} title={data[2]["title"]} desc={data[0]["desc"]}/>
              </div>
              <div className='news-flexbox'>
                  <p>SHOW MORE</p>
                  <i className="bi bi-arrow-right"></i>
              </div>
          </div>
      </div>
    );
}

function NewsItem({large, title, desc, image}) {
    let size;
    if (large) {
        size = 'news-section-item large-item'
    } else {
        size = 'news-section-item'
    }

    return (
      <div className={size} style={{backgroundImage: `url(${image})`}}>
          <h4>{title}</h4>
          <p>{desc}</p>
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
        </div>
    );
}

