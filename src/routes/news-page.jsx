import {NavLink} from "react-router-dom";
import {NewsItem} from "./home-page";
import {TitleSection} from "./category-page";
import TitleImg from "../assets/products.jpg"
import RiserImg from "../assets/pciriser.jpg";
import DotAwardImg from "../assets/Dot_Award_1600x1000px.jpg";
import React from "react";
import NewsData from '../news.json';

function AllNews({data}) {
    let newsList = [];
    let index = 0;
    for (let i = 0; i < data.length / 3; i++) {
        newsList.push(
            <div className='flexbox-column' style={{gap: 30}}>
                <NavLink to={data[index]["path"]} className='news-section-link link-large'><NewsItem large={true} title={data[index]["title"]}/></NavLink>
                <div className='news-flexbox'>
                    <NavLink to={data[index + 1]["path"]} className='news-section-link'><NewsItem large={false} title={data[index + 1]["title"]} image={RiserImg}/></NavLink>
                    <NavLink to={data[index + 2]["path"]} className='news-section-link'><NewsItem large={false} title={data[index + 2]["title"]} image={DotAwardImg}/></NavLink>
                </div>
            </div>
        )
    }

    return (
        <div>
            <TitleSection image={TitleImg} title='NEWS' desc='See our latest news'/>
            <div className='news-section'>
                <div className='container news-container'>
                    {newsList}
                </div>
            </div>
        </div>
    );
}

export default function NewsPage() {
    return (
        <div>
            <AllNews data={NewsData}/>
        </div>
    );
}