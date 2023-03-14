import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
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
                <Navbar />
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
