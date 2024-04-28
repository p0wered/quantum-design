import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import Test from '../assets/ctg-psu.jpg'


function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="slider-container">
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

export default function ProductPage() {
    return (
        <>
            <SimpleSlider/>
        </>
    )
}