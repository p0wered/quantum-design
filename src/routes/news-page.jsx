import {Link} from "react-router-dom";
import {TitleSection} from "./catalog-page";
import TitleImg from "../assets/news-img.jpg"
import React from "react";
import {NewsData} from '../news.js';
import {Footer} from "../App";

function AllNews({data}) {
    return (
        <div>
            <TitleSection image={TitleImg} title='NEWS' desc='See our latest news'/>
            <div className='news-section'>
                <div className='container news-container'>
                    <Link key={NewsData[0].id} to={`/news/article/${NewsData[0].id}`} className='news-section-link link-large'><NewsItem large={true} title={NewsData[0].title} image={NewsData[0].img}/></Link>
                    <div className='news-grid' style={{gap: 30}}>
                        {data.slice(1, data.length).map((item) => {
                            return(
                                <Link key={item.id} to={`/news/article/${item.id}`} className='news-section-link link-large'><NewsItem large={false} title={item.title} image={item.img}/></Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function NewsItem({large, title, image}) {
    let size, titleWidth;
    if (large) {
        size = 'news-section-item large-item';
        titleWidth = '70%';
    } else {
        size = 'news-section-item small-item'
        titleWidth = '100%';
    }

    return (
        <div className={size} style={{backgroundImage: `url(${image})`}}>
            <h2 style={{width: titleWidth}}>{title}</h2>
        </div>
    );
}

export default function NewsPage() {
    return (
        <div>
            <AllNews data={NewsData}/>
            <Footer/>
        </div>
    );
}