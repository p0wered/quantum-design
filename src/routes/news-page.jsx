import {NavLink} from "react-router-dom";
import {NewsItem} from "./home-page";
import {TitleSection} from "./catalog-page";
import TitleImg from "../assets/Newspost.jpg"
import React from "react";
import NewsData from '../news.json';

function AllNews({data}) {
    let newsList = [];
    for (let i = 1; i < data.length - 1; i += 2) {
        console.log(i);
        newsList.push(
            <div className='flexbox-column' style={{gap: 30}}>
                <div className='news-flexbox'>
                    <NavLink to={data[i]["path"]} className='news-section-link'><NewsItem large={false} title={data[i]["title"]} image={data[i]["image"]}/></NavLink>
                    <NavLink to={data[i + 1]["path"]} className='news-section-link'><NewsItem large={false} title={data[i + 1]["title"]} image={data[i + 1]["image"]}/></NavLink>
                </div>
            </div>
        )
    }

    return (
        <div>
            <TitleSection image={TitleImg} title='NEWS' desc='See our latest news'/>
            <div className='news-section'>
                <div className='container news-container'>
                    <div className='flexbox-column' style={{gap: 30}}>
                        <NavLink to={data[0]["path"]} className='news-section-link link-large'><NewsItem large={true} title={data[0]["title"]} image={require('../assets/Streamer4-2160x1440.jpg')}/></NavLink>
                        {newsList}
                    </div>
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