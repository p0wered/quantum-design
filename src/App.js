import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import Home from "./routes/home-page";
import AboutPage from "./routes/about-page";
import React, {useEffect, useState} from "react";
import CategoryPage from "./routes/category-page";

function NavBar() {

    let [navPosition, setNavPosition] = useState(0);
    let [prevScroll, setPrevScroll] = useState(0)
    let [navClass, setNavClass] = useState('nav-active')

    useEffect(() => {
        const handleScroll = event => {
            let currentScrollTop = window.scrollY;

            if (currentScrollTop > 15 && currentScrollTop > prevScroll) {
                setNavPosition(-79);
                setNavClass('nav-not-active');
            } else if (currentScrollTop > 15 && currentScrollTop < prevScroll) {
                setNavPosition(0);
                setNavClass('nav-active');
            } else if (currentScrollTop < 15) {
                setNavPosition(0);
                setNavClass('nav-not-active');
            }

            setPrevScroll(currentScrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScroll]);

    return (
        <div>
            <nav className={navClass} style={{top: `${navPosition}px`}}>
                <div className='container navbar-container'>
                    <div className="navbar-links">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/catalog">Catalog</NavLink>
                    </div>
                    <NavLink to="/">Quantum<span style={{fontWeight: 700}}>Design</span></NavLink>
                    <div className="navbar-links">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/catalog">Catalog</NavLink>
                    </div>
                </div>
            </nav>
            <div className='nav'>

            </div>
        </div>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/catalog" element={<CategoryPage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}
