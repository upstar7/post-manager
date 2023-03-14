import React from "react";
import Post from "./Post";
import { useDataContext } from "../contexts/DataContext";

const PostList = () => {
    const { data } = useDataContext();
    return (
        <div className="container">
            {data.map((post) => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    );
};

export default PostList;
