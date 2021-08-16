import React from 'react';
import { NavLink } from "react-router-dom";
import "./index.css"


const Navbar = () => {

    return (
        <>
            <div class="container-fluid nav_bg">
                <div class="row">
                    <div class="col-10 mx-auto">
                        <nav className="navbar  navbar-expand-lg   ">
                            <div class="container-fluid ">
                                <NavLink exact className="navbar-brand" to="/">E-Courses </NavLink>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li class="nav-item">

                                            <NavLink exact className="navbar-brand" activeClassName="menu_active" to="/">Home </NavLink>
                                        </li>
                                        <li class="nav-item">
                                            <NavLink exact className="navbar-brand" activeClassName="menu_active" to="/service">Service </NavLink>
                                        </li>
                                        <li class="nav-item">
                                            <NavLink exact className="navbar-brand" activeClassName="menu_active" to="/about">About </NavLink>
                                        </li>
                                        <li class="nav-item">
                                            <NavLink exact className="navbar-brand" activeClassName="menu_active" to="/contact">Contact </NavLink>
                                        </li>
                                        

                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>

                </div>

            </div>
        </>
    );

}

export default Navbar;