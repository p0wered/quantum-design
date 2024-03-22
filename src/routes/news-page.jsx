import {NavLink} from "react-router-dom";
import {NewsItem} from "./home-page";
import {TitleSection} from "./catalog-page";
import TitleImg from "../assets/news-img.jpg"
import React from "react";
import {NewsData} from '../news.js';

function AllNews({data}) {
    // let newsList = [];
    // newsList.push(
    //     data.map((item) => {
    //         return(
    //             <div className='flexbox-column' style={{gap: 30}}>
    //                 <div className='news-flexbox'>
    //                     <NavLink to={item.path} className='news-section-link'><NewsItem large={false} title={item.title} image={item.img}/></NavLink>
    //                     <NavLink to={data[i + 1]["path"]} className='news-section-link'><NewsItem large={false} title={data[i + 1]["title"]} image={data[i + 1]["image"]}/></NavLink>
    //                 </div>
    //             </div>
    //         )
    //     })
    //     <div className='flexbox-column' style={{gap: 30}}>
    //         <div className='news-flexbox'>
    //             <NavLink to={data[i]["path"]} className='news-section-link'><NewsItem large={false} title={data[i]["title"]} image={data[i]["image"]}/></NavLink>
    //             <NavLink to={data[i + 1]["path"]} className='news-section-link'><NewsItem large={false} title={data[i + 1]["title"]} image={data[i + 1]["image"]}/></NavLink>
    //         </div>
    //     </div>
    // )

    return (
        <div>
            <TitleSection image={TitleImg} title='NEWS' desc='See our latest news'/>
            <div className='news-section'>
                <div className='container news-container'>
                    <div className='flexbox-column' style={{gap: 30}}>
                        {data.map((item) => {
                            return(
                                <NavLink to={item.path} className='news-section-link link-large'><NewsItem large={false} title={item.title} image={item.img}/></NavLink>
                            )
                        })}
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