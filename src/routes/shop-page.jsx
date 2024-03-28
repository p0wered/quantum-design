import {ProductsData} from '../products.js'
import {useState} from "react";
import {NavLink} from "react-router-dom";
import ProductImg from "../assets/products.jpg"
import {TitleSection} from "./catalog-page";

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

    return (
        <div className='filters'>
            <h4 style={{fontWeight: 700}}>Filters</h4>
            <div>
                {uniqueRows}
            </div>
        </div>
    );
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
            <div className="checkboxes__item">
                <label className="checkbox style-c">
                    <input type="checkbox" value={value} onChange={handleChange}/>
                    <div className="checkbox__checkmark"></div>
                    <div className="checkbox__body">{category}</div>
                </label>
            </div>
        </div>
    );
}

function CatalogItem({product}) {
    let stocked
    product.stock > 0 ? stocked = 'catalog-item' : stocked = 'catalog-item not-stocked'

    return (
        <NavLink to='/product' className={stocked}>
        <img src={product.image} alt={product.name} style={{width: '100%'}}/>
            <p style={{fontWeight: 600, fontSize: '17px'}}>{product.name}</p>
            <p>{product.stock > 0 ? `${product.price}$` : 'Sold out'}</p>
        </NavLink>
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

export default function ShopPage() {
    const [selectedCategories, setSelectedCategories] = useState([]);

    return (
        <div>
            <TitleSection image={ProductImg} title='SHOP' desc='See our products'/>
            <div className='container-large'>
                <div className='filters-flexbox'>
                    <Filters products={ProductsData} categories={selectedCategories} setCategories={setSelectedCategories}/>
                    <CatalogGrid products={ProductsData} filter={selectedCategories}/>
                </div>
            </div>
        </div>
    );
}