import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import Home from "./routes/home-page";
import AboutPage from "./routes/about-page";
import React, {useEffect, useState} from "react";
import CategoryPage from "./routes/category-page";
import {Squash} from "hamburger-react";

function NavBar() {

    let [navPosition, setNavPosition] = useState(0);
    let [prevScroll, setPrevScroll] = useState(0);
    let [navClass, setNavClass] = useState('nav-not-active');
    let [isOpen, setIsOpen] = useState(false);
    let menuDisplay;

    if (isOpen) {
        navClass = 'nav-active'
        menuDisplay = 0
    } else {
        menuDisplay = '100vw'
    }

    useEffect(() => {
        const handleScroll = () => {
            let currentScrollTop = window.scrollY;

            if (currentScrollTop > 15 && currentScrollTop > prevScroll) {
                setNavPosition(-100);
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
    }, [prevScroll, isOpen]);

    function closeOnClick() {
        isOpen ? isOpen = false : isOpen = true
    }

    return (
        <div>
            <nav className={navClass} style={{top: `${navPosition}px`}}>
                <div className='container navbar-container'>
                    <div className="navbar-links">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/catalog">Catalog</NavLink>
                    </div>
                    <NavLink to="/" className='logo-link'>Quantum<span style={{fontWeight: 700}}>Design</span></NavLink>
                    <div className="navbar-links links-right">
                        <NavLink to="/"><i className="bi bi-bag"></i></NavLink>
                        <NavLink to="/"><i className="bi bi-person-circle" style={{fontSize: 26}}></i></NavLink>
                        <NavLink to="/"><i className="bi bi-search"></i></NavLink>
                    </div>
                    <Squash toggled={isOpen} toggle={setIsOpen}></Squash>
                </div>
            </nav>
            <div className='mobile-menu' style={{left: menuDisplay}}>
                <div className="mobile-navbar-links">
                    <NavLink className='mobile-link' to="/" onClick={closeOnClick}>Home</NavLink>
                    <NavLink className='mobile-link' to="/about" onClick={closeOnClick}>About</NavLink>
                    <NavLink className='mobile-link' to="/catalog" onClick={closeOnClick}>Catalog</NavLink>
                </div>
                <div className="links-bottom">
                    <NavLink to="/"><i className="bi bi-bag" style={{fontSize: 42}}></i></NavLink>
                    <NavLink to="/"><i className="bi bi-person-circle" style={{fontSize: 42}}></i></NavLink>
                    <NavLink to="/"><i className="bi bi-search" style={{fontSize: 42}}></i></NavLink>
                </div>
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
