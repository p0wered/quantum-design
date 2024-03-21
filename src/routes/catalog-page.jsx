import Aos from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from "react";
import titleImg from "../assets/products.jpg";

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

function CategoriesGrid() {
    return(
        <div className='categories-section'>
            <div className='container'>

            </div>
        </div>
    )
}

function CategoryItem() {
    return(
        <div className='category-item'>

        </div>
    )
}

export default function CatalogPage() {
    return(
        <div>
            <TitleSection image={titleImg} title='PRODUCTS' desc='See all categories'/>
            <CategoriesGrid/>
        </div>
    )
}