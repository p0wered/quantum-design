import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import Home from "./routes/home-page";
import AboutPage from "./routes/about-page";
import React from "react";
import CategoryPage from "./routes/category-page";

function NavBar() {
    return (
        <nav>
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
