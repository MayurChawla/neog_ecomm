import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import './navbarStyle.css';
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
                <div className="wrapper">
                    <div className="left">
                        <div>EN</div>
                        <div className="search-container">
                            <input className="input"></input>
                            <Search style={{ color: "gray", fontSize: 18 }} />
                        </div>
                    </div>
                    <div className="center">
                        <Link to="/" className="linkToHome">
                            <h1 className="logo">Y-LUX</h1>
                        </Link>
                    </div>
                    <div className="right">
                        <Link to="/register" className="linkToRegister">
                            <div className="menuItem">Register</div>
                        </Link>
                        <Link to="/login" className="linkToLogin">
                            <div className="menuItem">Sign In</div>
                        </Link>
                        <Link to="/cart" className="linkToCart">
                            <div className="menuItem">
                                <Badge badgeContent={4} color="primary">
                                    <ShoppingCartOutlined />
                                </Badge>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar;