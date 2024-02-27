import ProductsData from '../products.json'
import {useEffect, useState} from "react";
import titleImg from '../assets/products.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

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

    // eslint-disable-next-line no-extend-native
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
                <Filters products={ProductsData} categories={selectedCategories} setCategories={setSelectedCategories} />
                <CatalogGrid products={ProductsData} filter={selectedCategories} />
            </div>
        </div>
    );
}