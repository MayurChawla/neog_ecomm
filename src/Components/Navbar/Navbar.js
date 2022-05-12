import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import './navbarStyle.css';


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
                        <h1 className="logo">
                            Y-LUX
                        </h1>
                    </div>
                    <div className="right">
                        <div className="menuItem">Register</div>
                        <div className="menuItem">Sign In</div>
                        <div className="menuItem">
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar;