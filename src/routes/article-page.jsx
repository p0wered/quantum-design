import {NavLink} from "react-router-dom";
import React from "react";
import {TitleSection} from "./catalog-page";
import {NewsData} from "../news";

export default function ArticlePage() {
    return (
        <div className='flexbox-center flexbox-column' style={{height: '100vh'}}>
            <h1>Oops! Page Not Found...</h1>
            <h3 style={{textDecoration: 'underline'}}><NavLink to="/">Back to Home</NavLink></h3>
        </div>
    );
}

export function CreatorProgramPage() {
    return(
        <div>
            <TitleSection image={NewsData[0].img} title={NewsData[0].title}></TitleSection>
            <div className='container flexbox-center'>
                <div className='article-flexbox'>
                    <p className='text-gray'>{NewsData[0].date}</p>
                    <p style={{fontSize: 20}}>{NewsData[0].desc}</p>
                </div>
            </div>
        </div>
    )
}

export function RiserPage() {
    return(
        <div>
            <TitleSection image={NewsData[1].img} title={NewsData[1].title}></TitleSection>
        </div>
    )
}