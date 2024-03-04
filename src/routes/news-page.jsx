import {NavLink} from "react-router-dom";
import {NewsItem} from "./home-page";
import {TitleSection} from "./category-page";
import TitleImg from "../assets/products.jpg"
import CreatorImg from "../assets/Streamer4-2160x1440.jpg";
import RiserImg from "../assets/pciriser.jpg";
import DotAwardImg from "../assets/Dot_Award_1600x1000px.jpg";
import React from "react";
import ProductsData from '../products.json';

function AllNews({data}) {
    return (
        <div>
            <TitleSection image={TitleImg} title='NEWS' desc='See our latest news'/>
            <div className='news-section'>
                <div className='container news-container'>
                    <NavLink to={data[0]["path"]} className='news-section-link link-large'><NewsItem large={true} title={data[0]["title"]} image={CreatorImg}/></NavLink>
                    <div className='news-flexbox'>
                        <NavLink to={data[1]["path"]} className='news-section-link'><NewsItem large={false} title={data[1]["title"]} image={RiserImg}/></NavLink>
                        <NavLink to={data[2]["path"]} className='news-section-link'><NewsItem large={false} title={data[2]["title"]} image={DotAwardImg}/></NavLink>
                    </div>
                    <div className='show-news'>
                        <NavLink to='/news'><p>SHOW ALL NEWS</p></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function NewsPage() {
    return (
        <div>
            <AllNews data={ProductsData}/>
        </div>
    );
}