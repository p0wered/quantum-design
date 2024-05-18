import {ProductsData} from '../products.js'
import {useState} from "react";
import {NavLink} from "react-router-dom";
import ShopImg from '../assets/shop.jpg'
import {TitleSection} from "./catalog-page";

function Filters({products, setCategories, setColors, priceValue, setPriceValue}) {
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
            </div>
            <p>Category</p>
            <div className='filters-block'>
                {categories}
            </div>
            <p>Color</p>
            <div className='filters-block-row'>
                {colors}
            </div>
            <p style={{marginTop: 20}}>Price, $</p>
            <PriceSlider price={priceValue} setPrice={setPriceValue}/>
        </div>
    );
}

function PriceSlider({price, setPrice}) {
    const handleMinPriceChange = (event) => {
        const newMinPrice = parseInt(event.target.value);
        setPrice([newMinPrice, price[1]]);
    }

    const handleMaxPriceChange = (event) => {
        const newMaxPrice = parseInt(event.target.value);
        setPrice([price[0], newMaxPrice]);
    }

    return (
        <div className="flexbox-row" style={{ gap: 8 }}>
            <div className='price-merger'>
                <small>from</small>
                <label className="price-input">
                    <input
                        type="number"
                        value={price[0]}
                        onInput={handleMinPriceChange}
                    />
                </label>
            </div>
            <div className='price-merger'>
                <small>to</small>
                <label className='price-input'>
                    <input
                        type="number"
                        value={price[1]}
                        onInput={handleMaxPriceChange}
                    />
                </label>
            </div>
        </div>
    );
}

function CategoryItem({category, value, setSelectedCategories}) {
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
    let stocked;
    product.stock > 0 ? stocked = 'catalog-item' : stocked = 'catalog-item not-stocked';

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
                    <div className="checkbox-checkmark" style={{backgroundColor: color, borderRadius: 10}}></div>
                </label>
            </div>
        </div>
    );
}

function CatalogGrid({ products, filterCategory, filterColor, filterPrice }) {
    const filteredProducts = products.filter((product) => {
        if (filterCategory.length > 0 && !filterCategory.includes(product.category)) {
            return false;
        }
        if (
            filterPrice[0] > 0 &&
            product.price < filterPrice[0]
        ) {
            return false;
        }
        if (
            filterPrice[1] > 0 &&
            product.price > filterPrice[1]
        ) {
            return false;
        }
        return !(
            filterColor.length > 0 &&
            (!product.color ||
                !product.color.some((color) => filterColor.includes(color)))
        );
    });

    return (
        <div className="catalog-grid">
            {filteredProducts.map((product) => (
                <CatalogItem product={product} key={product.id} />
            ))}
        </div>
    );
}

export default function ShopPage() {
    let maxPrice = 0;
    ProductsData.forEach((product) => {
        if (product.price > maxPrice) {
            maxPrice = product.price;
        }
    })

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [priceMinMax, setPriceMinMax] = useState([0, maxPrice]);

    return (
        <div>
            <TitleSection image={ShopImg} small={true} title='SHOP' desc='See our products'/>
            <div className='shop-section'>
                <div className='container-large'>
                    <div className='filters-flexbox'>
                        <Filters products={ProductsData}
                                 categories={selectedCategories}
                                 setCategories={setSelectedCategories}
                                 setColors={setSelectedColors}
                                 priceValue={priceMinMax}
                                 setPriceValue={setPriceMinMax}
                        />
                        <CatalogGrid products={ProductsData}
                                     filterCategory={selectedCategories}
                                     filterColor={selectedColors}
                                     filterPrice={priceMinMax}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}