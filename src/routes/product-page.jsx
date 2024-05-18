import Slider from "react-slick";
import React from "react";
import NorthImg from '../assets/case_product.webp'
import CaseImg1 from '../products/North_White_Mesh_1-Left-Front-540x540.webp';
import CaseImg2 from '../products/North_White_Mesh_21-Special-IO-810x810.webp';
import CaseImg3 from '../products/North_White_Mesh_8-Front-810x810.webp';
import CaseImg4 from '../products/North_White_Mesh_9-Front-Above-810x810.webp';
import CaseImg5 from '../products/North_White_Mesh_17-Exploded-View-810x810.webp';
import CaseImg6 from '../products/North_White_Mesh_19-Storage-Alternative-810x810.webp';
import CaseImg7 from '../products/North_White_Mesh_20-Special-Detail-810x810.webp';
import {Link} from "react-router-dom";
import {Footer} from "../App";
import {TitleSection} from "./catalog-page";

// this is prototype page only for single product

function SampleNextArrow(props) {
    const {className, onClick} = props;
    return (
        <div className={`strap-arrow ${className}`} onClick={onClick}>
            <i className='bi bi-caret-right'></i>
        </div>
    );
}

function SamplePrevArrow(props) {
    const {className, onClick } = props;
    return (
        <div className={`strap-arrow ${className}`} onClick={onClick}>
            <i className='bi bi-caret-left'></i>
        </div>
    );
}

function SimpleSlider() {
    let slides = [];
    let images = [CaseImg1, CaseImg2, CaseImg3, CaseImg4, CaseImg5, CaseImg6, CaseImg7];

    for (let i = 0; i <= 6; i++) {
        slides.push(
            <div>
                <img src={images[i]} style={{pointerEvents: "none", width: 540, height: 540}}/>
            </div>
        )
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
    };
    return (
        <div className="slider-container slider-product">
            <Slider {...settings}>
                {slides}
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
            <TitleSection title='PC CASES' image={NorthImg} small={true}/>
            <PagePath/>
            <div className='container product-padding'>
                <div className='product-container' style={{gap: '3rem'}}>
                    <div>
                        <SimpleSlider/>
                    </div>
                    <div className='flexbox-center product-inner'>
                        <div className='flexbox-column product-info' style={{gap: '2.325rem'}}>
                            <div className='flexbox-row title' style={{gap: '1rem', alignItems: 'end'}}>
                                <h2 style={{fontWeight: 600, lineHeight: 0.7}}>North</h2>
                                <h4 style={{fontWeight: 400, lineHeight: 1.3}}>79.99$</h4>
                            </div>
                            <div className='flexbox-column' style={{gap: "8px"}}>
                                <p>• Enhance the look of your gaming station with FSC-certified wood and alloy
                                    details</p>
                                <p>• Choose a GPU up to 413 mm, or up to 380 mm with a 420 mm front radiator </p>
                                <p>• Get a head start on your build with the three included 140 mm Aspect PWM fans </p>
                            </div>
                            <div className='flexbox-row product-buttons'>
                                <button className='button-product'>ADD TO CART</button>
                                <a href="#spec">VIEW SPECIFICATIONS</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='product-desc'>
                    <div className='flexbox-column' style={{maxWidth: 915, gap: '1rem'}}>
                        <h3>Transform your gaming space</h3>
                        <p id='spec'>
                            North reimagines the gaming PC, introducing natural materials and bespoke details to make
                            gaming
                            a stylish addition to the living space. Fusing design and airflow engineering, the case
                            features
                            fine-patterned mesh ventilation and an open front with real walnut or oak panels. The design
                            is
                            complemented by sleek brass or steel details and an integrated tab for easy access to the
                            top of
                            the case. Inside, North offers an intuitive interior layout and generous compatibility.
                        </p>
                        <h3 style={{width: '100%'}}>Specifications</h3>
                        <div className='specifications-grid'>
                            <div className='item'>
                                <p style={{fontWeight: 500}}>Dedicated 2.5" drive mounts</p>
                                <p>2</p>
                            </div>
                            <div className='item'>
                                <p style={{fontWeight: 500}}>Combined 3.5/2.5” drive mounts</p>
                                <p>2 (included)</p>
                            </div>
                            <div className='item'>
                                <p style={{fontWeight: 500}}>5.25” drive mounts</p>
                                <p>0</p>
                            </div>
                            <div className='item'>
                                <p style={{fontWeight: 500}}>Expansion slots</p>
                                <p>7</p>
                            </div>
                            <div className='item'>
                                <p style={{fontWeight: 500}}>Front interface</p>
                                <p>1xUSB 3.1 Gen 2 Type-C, 2xUSB 3.0</p>
                                <p>Audio & Mic</p>
                            </div>
                            <div className='item'>
                                <p style={{fontWeight: 500}}>Total fan mounts</p>
                                <p>6 x 120 mm or 4 x 140 mm</p>
                            </div>
                            <div className='item'>
                                <p style={{fontWeight: 500}}>Front fan</p>
                                <p>3 x 120, 2 x 140 mm (2 x Aspect 140 mm PWM Included)</p>
                            </div>
                            <div className='item'>
                                <p style={{fontWeight: 500}}>Top Fan</p>
                                <p>2 x 120/140 mm</p>
                            </div>
                            <div className='item'>
                                <p style={{fontWeight: 500}}>Rear fan</p>
                                <p>1 x 120 mm</p>
                            </div>
                            <div className='item'>
                                <p style={{fontWeight: 500}}>Cable routing grommets</p>
                                <p>Yes</p>
                            </div>
                        </div>
                        <h3 style={{width: '100%'}}>Compatibility</h3>
                        <div className='specifications-grid'>
                            <div className='item'>
                                <p style={{fontWeight: 500}}>Motherboard compatibility</p>
                                <p>ATX / mATX / Mini-ITX</p>
                            </div>
                            <div className='item'>
                                <p style={{fontWeight: 500}}>Power supply type</p>
                                <p>ATX</p>
                            </div>
                            <div className='item'>
                                <p style={{fontWeight: 500}}>PSU max length</p>
                                <p>1 HDD Tray: 255 mm max, 2 HDD</p>
                                <p>Tray: 155 mm max</p>
                            </div>
                            <div className='item'>
                                <p style={{fontWeight: 500}}>GPU max length</p>
                                <p>355 mm with and without front fan mounted</p>
                            </div>
                            <div className='item'>
                                <p style={{fontWeight: 500}}>CPU cooler max height</p>
                                <p>145 mm with Fan Bracket / 170 mm w.o</p>
                            </div>
                            <div className='item'>
                                <p style={{fontWeight: 500}}>Cable routing space</p>
                                <p>30 mm</p>
                            </div>
                        </div>
                        <h3 style={{width: '100%'}}>Dimensions</h3>
                        <div className='specifications-grid'>
                            <div className='item'>
                                <p style={{fontWeight: 500}}>Case dimensions (LxWxH)</p>
                                <p>447 x 215 x 469 mm</p>
                            </div>
                            <div className='item'>
                                <p style={{fontWeight: 500}}>Package dimensions (LxWxH)</p>
                                <p>565 x 326 x 553 mm</p>
                            </div>
                            <div className='item'>
                                <p style={{fontWeight: 500}}>Net weight</p>
                                <p>7.6 kg</p>
                            </div>
                            <div className='item'>
                                <p style={{fontWeight: 500}}>Gross weight</p>
                                <p>9.55 kg</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}