import React from "react";
import Post from "./Post";
import { useDataContext } from "../contexts/DataContext";

const PostList = () => {
    const { data } = useDataContext();
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="text-center">Title</th>
                    <th className="text-center">Content</th>
                    <th className="text-center">Status</th>
                    <th className="text-center">CreatedAt</th>
                </tr>
            </thead>
            <tbody>
                {data.map((post) => (
                    <Post post={post} key={post.id} />
                ))}
            </tbody>
        </table>
    );
};

export default PostList;
