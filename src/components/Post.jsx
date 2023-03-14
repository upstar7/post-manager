import React from "react";
import LDButton from "./LDButton/LDButton";
const Post = ({ post }) => {
    return (
        <div className="card my-3">
            <div className="card-header">
                <h5 className="text-primary">{post.title}</h5>
            </div>
            <div className="card-body">{post.body}</div>
            <div className="card-footer d-flex justify-content-end">
                <LDButton />
                <div className="ml-5 my-auto">{post.createdAt}</div>
            </div>
        </div>
    );
};

export default Post;
