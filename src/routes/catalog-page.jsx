import Aos from 'aos'
import 'aos/dist/aos.css'
import React, {useEffect} from "react";
import titleImg from "../assets/products.jpg";
import {CategoryData} from "../categories";
import {Footer} from "../App";
import {NavLink} from "react-router-dom";
import {ParallaxBanner, ParallaxProvider} from "react-scroll-parallax";

export function TitleSection({ image, title, desc, small }) {
    useEffect(() => {
        Aos.init();
    }, []);

    let classSize = small ? 'section-wrapper-sm' : 'section-wrapper'

    return (
        <div className={classSize}>
            <ParallaxProvider>
                <ParallaxBanner className='title-section image-box' layers={[{image: image, speed: -20}]}>
                    <div>
                        <h1 data-aos='fade-up' data-aos-duration='1000'>{title}</h1>
                        <h4 className='desc' data-aos='fade-up' data-aos-duration='1000'
                            data-aos-delay='100'>{desc}</h4>
                    </div>
                </ParallaxBanner>
            </ParallaxProvider>
        </div>
    );
}

function CategoriesGrid({data}) {
    return (
        <div className='categories-section'>
            <div className='container'>
                <div className='category-grid'>
                    {data.map((item) => {
                        return (
                            <CategoryItem name={item.name} image={item.image}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

function CategoryItem({name, image}) {
    return(
        <NavLink to='/shop' data-aos='fade-up' data-aos-duration='500'>
            <div className='category-item'>
                <h4>{name}</h4>
                <img className='category-image' src={image} alt={name}/>
                <p className='catalog-link'>See more</p>
            </div>
        </NavLink>
    )
}

export default function CatalogPage() {
    return (
        <div>
            <TitleSection image={titleImg} title='PRODUCTS' desc='See all categories'/>
            <CategoriesGrid data={CategoryData}/>
            <Footer/>
        </div>
    )
}