import {useParams} from "react-router-dom";
import React from "react";
import {TitleSection} from "./catalog-page";
import {NewsData} from "../news";

export default function ArticlePage() {
    const { id } = useParams();
    const item = NewsData.find(item => item.id === parseInt(id))

    return(
        <div>
            <TitleSection image={item.img} title={item.title}></TitleSection>
            <div className='container flexbox-center'>
                <div className='item-flexbox'>
                    <p className='text-gray'>{item.date}</p>
                    <p style={{fontSize: 20}}>{item.desc}</p>
                </div>
            </div>
        </div>
    )
}