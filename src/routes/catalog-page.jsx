import Aos from 'aos'
import 'aos/dist/aos.css'
import React, {useEffect} from "react";
import titleImg from "../assets/products.jpg";
import {CategoryData} from "../categories";
import {Footer} from "../App";
import {NavLink} from "react-router-dom";

export function TitleSection({ image, title, desc }) {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className='title-section image-box' style={{backgroundImage: `url(${image})`}}>
            <h1 data-aos='fade-up' data-aos-duration='1000'>{title}</h1>
            <h4 className='desc' data-aos='fade-up' data-aos-duration='1000'
                data-aos-delay='100'>{desc}</h4>
        </div>
    );
}

function CategoriesGrid({data}) {
    return(
        <div className='categories-section'>
            <div className='container'>
                <div className='category-grid'>
                    {data.map((item) => {
                        return(
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
        <NavLink to='/shop-page'>
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