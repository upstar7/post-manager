import React from "react";
import LDButton from "./LDButton/LDButton";
const Post = ({ post }) => {
    return (
        <tr>
            <td className="text-center align-middle">{post.title}</td>
            <td className="text-primary align-middle">{post.body}</td>
            <td className="text-center align-middle">
                <LDButton />
            </td>
            <td className="text-center text-nowrap align-middle">
                {post.createdAt}
            </td>
        </tr>
    );
};

export default Post;
