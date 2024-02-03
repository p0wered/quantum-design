import {PRODUCTS} from "./products";
import {useEffect, useState} from "react";
import titleImg from '../assets/products.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

export function TitleSection({ image, title, desc }) {
    useEffect(() => {
        Aos.init();
    }, []);

    let divStyle = {backgroundImage: `url(${image})`}

    return (
        <div className='title-section image-box' style={divStyle}>
            <h1 data-aos='fade-up' data-aos-duration='1000'>{title}</h1>
            <h4 className='title-section-desc' data-aos='fade-up' data-aos-duration='1000'
                data-aos-delay='100'>{desc}</h4>
        </div>
    );
}

function Filters({products, setCategories}) {
    const rows = [];
    let lastCategory = [];
    products.forEach((product) => {
        if (!lastCategory.includes(product.category)) {
            rows.push(
                <CategoryItem
                    category={product.category}
                    value={product.category}
                    setSelectedCategories={setCategories}
                    key={product.category}
                />
            );
        }
        lastCategory.push(product.category);
    });

    Array.prototype.unique = function () {
        return Array.from(new Set(this));
    };

    let uniqueRows = rows.unique();

    return <div className='filters'>{uniqueRows}</div>;
}

function CategoryItem({ category, value, setSelectedCategories }) {
    const handleChange = (event) => {
        const isChecked = event.target.checked;

        if (isChecked) {
            setSelectedCategories((prevCategories) => [...prevCategories, value]);
        } else {
            setSelectedCategories((prevCategories) =>
                prevCategories.filter((categoryValue) => categoryValue !== value)
            );
        }
    };

    return (
        <div className='filters-item'>
            <input type='checkbox' value={value} onChange={handleChange} />
            <p>{category}</p>
        </div>
    );
}

function CatalogItem({product}) {
    let stocked
    product.stock > 0 ? stocked = 'catalog-item' : stocked = 'catalog-item not-stocked'

    return (
        <div className={stocked}>
            <p>{product.name}</p>
            <p>{product.price}$</p>
        </div>
    )
}

function CatalogGrid({products, filter}) {
    let items = []

    if (filter.length === 0) {
        products.forEach(product => {
            items.push(<CatalogItem product={product} key={product}/>)
        })
    } else {
        products.forEach(product => {
            if (filter.includes(product.category)) {
                items.push(<CatalogItem product={product} key={product}/>)
            }
        })
    }

    return(
        <div className="catalog-grid">
            {items}
        </div>
    );
}

export default function CategoryPage() {
    const [selectedCategories, setSelectedCategories] = useState([]);

    return (
        <div>
            <TitleSection image={titleImg} title='PRODUCTS' desc='See all categories'/>
            <div className='filters-flexbox'>
                <Filters products={PRODUCTS} categories={selectedCategories} setCategories={setSelectedCategories} />
                <CatalogGrid products={PRODUCTS} filter={selectedCategories} />
            </div>
        </div>
    );
}