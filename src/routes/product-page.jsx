import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {SimpleSlider} from "./home-page";
import {ProductsData} from "../products";
import React, {useState} from "react";

export default function ProductPage() {
    let [currentWidth, setCurrentWidth] = useState(window.innerWidth);

    window.addEventListener('resize', function (){
        setCurrentWidth(window.innerWidth)
    })
    return (
        <SimpleSlider slidesAmount={currentWidth < 1200 ? 3 : 4} slidesPerScroll={currentWidth < 1200 ? 1 : 4} products={ProductsData}/>
    )
}