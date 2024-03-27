import {ProductsData} from '../products.js'
import {useState} from "react";
import {NavLink} from "react-router-dom";

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
        <div className='container-wide'>
            <div style={{height: 91, width: '100%'}}></div>
            <div className='filters-flexbox'>
                <Filters products={ProductsData} categories={selectedCategories} setCategories={setSelectedCategories}/>
                <CatalogGrid products={ProductsData} filter={selectedCategories}/>
            </div>
        </div>
    );
}