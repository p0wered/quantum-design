import Aos from 'aos'
import 'aos/dist/aos.css'
import React, {useEffect} from "react";
import titleImg from "../assets/products.jpg";
import {CategoryData} from "../categories";
import {Footer} from "../App";

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
                            <CategoryItem name={item.name} image={data.image}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

function CategoryItem({name, image}) {
    return(
        <div className='category-item'>
            <h4>{name}</h4>
            <div style={{backgroundImage: `url(${image})`, width: '10rem', aspectRatio: 1}}></div>
        </div>
    )
}

export default function CatalogPage() {
    return(
        <div>
            <TitleSection image={titleImg} title='PRODUCTS' desc='See all categories'/>
            <CategoriesGrid data={CategoryData}/>
            <Footer/>
        </div>
    )
}