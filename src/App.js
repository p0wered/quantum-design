import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import Home from "./routes/home-page";
import NewPage from "./routes/new-page";
import React from "react";

function NavBar() {
  return (
      <nav>
          <div className='container navbar-container'>
              <p>Wishbones<span className="logo-span">+Partners</span></p>
              <div className="navbar-links">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/about">About</NavLink>
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
                <Route path="/about" element={<NewPage/>}/>
            </Routes>
      </BrowserRouter>
  );
}
