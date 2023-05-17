import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink to="/" className="navbar-brand text-white pr-5">
                    Social Feeds
                </NavLink>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink
                                className="nav-link pr-5"
                                activeStyle={{
                                    fontWeight: "bold",
                                    textDecorationLine: "underline",
                                }}
                                to="/"
                                exact
                            >
                                Posts
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link pr-5"
                                activeStyle={{
                                    fontWeight: "bold",
                                    textDecorationLine: "underline",
                                }}
                                to="/create"
                            >
                                Create Post
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
