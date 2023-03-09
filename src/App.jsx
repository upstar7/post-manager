import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import { DataContext } from "./contexts/DataContext";

import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("data.json").then((res) => {
            setData(res.data);
        });
    }, []);

    return (
        <DataContext.Provider
            value={{
                data,
                setData,
            }}
        >
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <NavLink to="/" className="navbar-brand text-white pr-5">
                        Post Manager
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
                <div className="m-3">
                    <br />
                    <Route path="/" exact component={PostList} />
                    <Route path="/create" exact component={CreatePost} />
                </div>
            </BrowserRouter>
        </DataContext.Provider>
    );
};

export default App;
