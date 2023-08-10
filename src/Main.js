import React, { Component } from "react";
import {
Route, Routes,
NavLink, 
HashRouter
} from "react-router-dom";
 import Home from "./Home";
 import CompanyInfo from "./CompanyInfo";
 import Contact from "./Contact";


class Main extends Component {
render() { 
    return (
         <HashRouter> 
        <div>
        <h1>MindfulMax</h1> 
        <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/CompanyInfo">Company Info</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>

        </ul>
        <div className="content">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/companyInfo" element={<CompanyInfo/>}/>
                <Route path="/contact" element={<Contact/>}/>
                
            </Routes>
                </div>
        </div>
            </HashRouter>
        );
    }
}
export default Main;