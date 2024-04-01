import {ProductsData} from '../products.js'
import {useState} from "react";
import {NavLink} from "react-router-dom";
import ProductImg from "../assets/products.jpg"
import {TitleSection} from "./catalog-page";

function Filters({products, setCategories}) {
    const categories = [];
    const categoriesIncluded = [];
    const colors = [];
    const colorsIncluded = [];

    products.forEach((product) => {
        if (!categoriesIncluded.includes(product.category)) {
            categories.push(
                <CategoryItem
                    category={product.category}
                    value={product.category}
                    setSelectedCategories={setCategories}
                    key={product.category}
                />
            );
            categoriesIncluded.push(product.category);
        }
        if (product.color) {
            product.color.forEach((color) => {
                if (!colorsIncluded.includes(color)) {
                    colors.push(
                        <ColorItem color={color}
                                   value={color}
                                   setSelectedCategories={setCategories}
                                   key={color}
                        />
                    )
                    colorsIncluded.push(color);
                }
            })
        }
    });

    return (
        <div className='filters'>
            <h4 style={{fontWeight: 700}}>Refine By</h4>
            <p>Category</p>
            <div className='filters-block'>
                {categories}
            </div>
            <p>Color</p>
            <div className='filters-block'>
                {colors}
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
            <div className="checkboxes-item">
                <label className="checkbox style-c">
                    <input type="checkbox" value={value} onChange={handleChange}/>
                    <div className="checkbox-checkmark"></div>
                    <div className="checkbox-body">{category}</div>
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

function ColorItem({color, value, setSelectedCategories}) {
    const colorChange = (event) => {
        const isChecked = event.target.checked;

        if (isChecked) {
            setSelectedCategories((prevCategories) => [...prevCategories, value]);
        } else {
            setSelectedCategories((prevCategories) =>
                prevCategories.filter((colorValue) => colorValue !== value)
            );
        }
    };

    return (
        <div className='filters-item'>
            <div className="checkboxes-item">
                <label className="checkbox style-c">
                    <input type="checkbox" value={value} onChange={colorChange}/>
                    <div className="checkbox-checkmark" style={{backgroundColor: color}}></div>
                </label>
            </div>
        </div>
    );
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
            if (product.color) {
                product.color.forEach((color) => {
                    if (filter.includes(color)) {
                        items.push(<CatalogItem product={product} key={product}/>)
                    }
                })
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
            <div className='shop-section'>
                <div className='container-large'>
                    <div className='filters-flexbox'>
                        <Filters products={ProductsData} categories={selectedCategories}
                                 setCategories={setSelectedCategories}/>
                        <CatalogGrid products={ProductsData} filter={selectedCategories}/>
                    </div>
                </div>
            </div>
        </div>
    );
}