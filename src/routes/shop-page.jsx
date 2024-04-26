import {ProductsData} from '../products.js'
import {useState} from "react";
import {NavLink} from "react-router-dom";
import ShopImg from '../assets/shop.jpg'
import {TitleSection} from "./catalog-page";
import 'react-range-slider-input/dist/style.css';

function Filters({products, setCategories, setColors}) {
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
                                   setSelectedColors={setColors}
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
            <div className='flexbox-row' style={{justifyContent: 'space-between'}}>
                <h4 style={{fontWeight: 700}}>Refine By</h4>
                <i className="bi bi-caret-down-fill"></i>
            </div>
            <p>Category</p>
            <div className='filters-block'>
                {categories}
            </div>
            <p>Color</p>
            <div className='filters-block-row'>
                {colors}
            </div>
        </div>
    );
}

function CategoryItem({ category, value, setSelectedCategories }) {
    const handleChange = (event) => {
        const categoryChecked = event.target.checked;

        if (categoryChecked) {
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
        <NavLink to='/shop/product' className={stocked}>
        <img src={product.image} alt={product.name} style={{width: '100%'}}/>
            <p style={{fontWeight: 600, fontSize: '17px'}}>{product.name}</p>
            <p>{product.stock > 0 ? `${product.price}$` : 'Sold out'}</p>
        </NavLink>
    )
}

function ColorItem({color, value, setSelectedColors}) {
    const colorChange = (event) => {
        const colorChecked = event.target.checked;

        if (colorChecked) {
            setSelectedColors((prevColors) => [...prevColors, value]);
        } else {
            setSelectedColors((prevColors) =>
                prevColors.filter((colorValue) => colorValue !== value)
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

function CatalogGrid({products, filterCategory, filterColor}) {
    const filteredProducts = products.filter(product => {
        if (filterCategory.length > 0 && !filterCategory.includes(product.category)) {
            return false;
        }
        return !(filterColor.length > 0 && (!product.color || !product.color.some(color => filterColor.includes(color))));
    });

    return (
        <div className="catalog-grid">
            {filteredProducts.map(product => (
                <CatalogItem product={product} key={product.id}/>
            ))}
        </div>
    );
}

export default function ShopPage() {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);

    return (
        <div>
            <TitleSection image={ShopImg} title='SHOP' desc='See our products'/>
            <div className='shop-section'>
                <div className='container-large'>
                    <div className='filters-flexbox'>
                        <Filters products={ProductsData} categories={selectedCategories}
                                 setCategories={setSelectedCategories} setColors={setSelectedColors}/>
                        <CatalogGrid products={ProductsData} filterCategory={selectedCategories} filterColor={selectedColors}/>
                    </div>
                </div>
            </div>
        </div>
    );
}