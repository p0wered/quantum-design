import {PRODUCTS} from "./products";
import {useState} from "react";

function Filters({ products }) {
    console.log(products)
    const rows = [];
    let lastCategory = [];

    products.forEach(product => {
        if (!(lastCategory.includes(product.category))) {
            rows.push(<CategoryItem category={product.category} key={product.category}/>)
        }
        lastCategory.push(product.category)
    });

    Array.prototype.unique = function() {
        return Array.from(new Set(this))
    }
    let unique_rows = rows.unique()

    return (
        <div className='filters'>
            {unique_rows}
        </div>
    )
}

function CategoryItem({category}) {
    return (
        <div className='filters-item'>
            <input type="checkbox"/>
            <p>{category}</p>
        </div>
    )
}

function CatalogItem({product}) {
    let name = product.stock > 0 ? product.name:
        <span style={{color: 'red'}}>
            {product.name}
        </span>

    return (
        <div className='catalog-item'>
            <p>{name}</p>
        </div>
    )
}

function CatalogGrid({products}) {
    let all = []

    products.forEach(product => {
        all.push(<CatalogItem product={product}/>)
    })

    return(
        <div className="catalog-grid">
            {all}
        </div>
    );
}

export default function CategoryPage() {

    return (
        <div>
            <div className="filters-flexbox">
                <Filters products={PRODUCTS}/>
                <CatalogGrid products={PRODUCTS}></CatalogGrid>
            </div>
        </div>
    );
}